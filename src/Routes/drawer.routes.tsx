import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../Pages/home';
import { WebViews } from '../Pages/webViews';
import { Ionicons } from '@expo/vector-icons'
import DrawerMenu from '../Components/drawermenu';
import { useNavigation } from '@react-navigation/core';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MunuLateral(){
  const navigation = useNavigation();

  return(
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      overlayColor="transparent"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowOpacity: 0.32,
          shadowRadius: 0.46,
          elevation: 0.3,
        },
        headerTintColor: '#000000',
        headerTitleStyle: { fontSize: 26 },
        headerTitleAlign: 'center',
      }}
      drawerStyle={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen 
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: 'STRANS',
          headerTitleStyle: { fontSize: 30, color:"#ffa22b"},
        }} 
      />
      <Drawer.Screen 
        name="WebViews"
        component={WebViews}
        options={{
          headerShown: true,
          title: 'STRANS',
          headerTitleStyle: { fontSize: 30, color:"#ffa22b"},
          headerRight: () => (
            <Ionicons
              name="ios-arrow-back-outline"
              size={28}
              style={{marginRight: 10}}
              backgroundColor="#ffffff"
              color="#000000"
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }} 
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Stack.Navigator mode="card" headerMode="none"> 
      <Stack.Screen name="MenuLateral" component={MunuLateral} />
    </Stack.Navigator>
  );
}