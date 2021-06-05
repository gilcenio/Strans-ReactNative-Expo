import React, { useRef } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { News } from '../Components/news'
import { Buttons } from '../Components/buttons'
import { Modalize } from 'react-native-modalize'

export function Home(){
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = (): void => modalizeRef.current?.open();

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <Text style={styles.textSeparator}>DESTAQUES</Text>
      </View>
      <View style={styles.news}>
        <News />
      </View>
      <View style={styles.separator}>
        <Text style={styles.textSeparator}>ACESSO RAPIDO</Text>
      </View>
      <View style={styles.buttons}>
        <ScrollView>
          <Buttons isso={onOpen} />
        </ScrollView>
      </View>
      <Modalize ref={modalizeRef} snapPoint={400} ></Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  separator:{
    height: 38,
    backgroundColor: '#ffa33b',
    justifyContent: 'center',
  },
  textSeparator:{
    marginLeft: 20,
    fontSize: 14,
    color: '#133176',
    fontFamily: 'Montserrat_400Regular',
  },
  news:{
    height: 386,
    backgroundColor: '#fff'
  },
  buttons:{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})