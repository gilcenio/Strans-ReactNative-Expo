import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/core';

export function News(){
  const navigation = useNavigation();
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageCurrent, setpageCurrent] = useState(1);
  
  useEffect(() => {
    setisLoading(true);
    fetch(
      'https://www.brasilnoticiasja.com.br/api/noticias/' +
        pageCurrent,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setNoticias(data);
        setisLoading(false);
      });
  }, [pageCurrent]);

  function Tempo() {
    setisLoading(true);
    setTimeout(() => {
      setpageCurrent(pageCurrent + 1);
      setisLoading(false);
    }, 1000);
  }

  function PopularShow(item: any) {
    const {title, img, text, date, postlink} = item.item;

    if (img == null){
      return(
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.containerItem}>
                <Image 
                  style={styles.image}
                  source={require('../Assets/error.jpg')}
                />
                <Text style={styles.textTitle}>{title}</Text>
                <Text numberOfLines={3} style={styles.textInformation}>{text}</Text>
                <Text style={styles.textDate}>{date}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      )
    } 

    const Images = img.toString();
    const newImage = Images.replace('""', '');
    const Links = postlink.toString();
    const newLinks = Links.replace('""', '');   

    return (
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("WebViews", {html: newLinks})}
        >
          <View style={styles.container}>
            <View style={styles.containerItem}>
              <Image 
                style={styles.image}
                source={{uri: newImage}}
              />
              <Text style={styles.textTitle}>{title}</Text>
              <Text numberOfLines={3} style={styles.textInformation}>{text}</Text>
              <Text style={styles.textDate}>{date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>
        {isLoading ? (
          <View style={styles.viewLoading}>
            <LottieView
              resizeMode="contain"
              style={{width: 200, height: 200}}
              source={require('../Animations/3532-car.json')}
              autoPlay
            />
            <Text style={styles.textLoading}>Carregando!</Text>
          </View>
        ) : (
          <FlatList 
            data={noticias}
            keyExtractor={(item, index) => index.toString()}
            renderItem={PopularShow}
            horizontal={true}
            onEndReached={Tempo}
            onEndReachedThreshold={0}
            refreshing={isLoading}
            onRefresh={Tempo}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    width: 380, 
    height: 400, 
    backgroundColor: '#fff', 
    margin: 2, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  containerItem:{
    width: 360, 
    height: 380,
  },
  image:{
    width: 'auto', 
    height: 214, 
    borderRadius: 12
  },
  textTitle:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    marginTop: 8
  },
  textInformation:{
    height: 50,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    marginTop: 8,
    maxWidth: 380,
    overflow: 'hidden',
  },
  // max-width: 15ch;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  textDate:{
    fontFamily: 'Montserrat_300Light',
    fontSize: 14,
    marginTop: 9,
    color: '#bdbdbd',
  },
  textLoading:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
  },
  viewLoading:{
    alignItems: 'center',
  }
})