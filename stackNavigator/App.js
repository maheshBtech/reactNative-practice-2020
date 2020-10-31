
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Home from './components/home';
import Details from './components/details'

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
const Stack = createStackNavigator();

export default function App() {
  
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {
          {
             headerStyle:{
               backgroundColor:"#ddd"
              
             },
              headerTitleAlign:"center"
          }
        }>
          <Stack.Screen  name = "Home" component = {Home}></Stack.Screen>
          <Stack.Screen options = {({route}) =>({title:route.params.nik})} name = "Details" component = {Details}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
   
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: '#fff',
    alignItems:"center"
    
  },
});
