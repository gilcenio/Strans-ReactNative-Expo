import React from 'react';
import Routes from './src/Routes'
import AppLoading  from 'expo-app-loading'
import { 
  useFonts, 
  Montserrat_300Light, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes/>
  );
}
