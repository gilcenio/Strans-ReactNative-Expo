import React, { useEffect, useState } from 'react';
import { WebView } from 'react-native-webview'
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

interface PropsNavigation{
  route: any
}

export function WebViews({route}: PropsNavigation){
  const key = route.params.html;
  const [loading, setLoading] = useState(false) 

  useEffect(() => {
    setLoading(true);
  },[key])

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.containerLogin}>
          <LottieView
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
            source={require('../Animations/3532-car.json')}
            autoPlay
          />
          <Text style={styles.textLoading}>Carregando!</Text>
        </View>
      )}
        <WebView 
          source={{ uri: key }} 
          onLoadStart={() => {
            setLoading(true);
          }}
          onLoadEnd={() => {
            setLoading(false);
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  containerLogin:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff'
  },
  textLoading:{
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
  },
})