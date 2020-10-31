import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,View} from 'react-native';


import Home from './components/Home';
import Details from './components/Details';
import About from './components/About';
import Settings from './components/Settings';
import Tabs from './components/Tabs'
import Tab1 from './components/tabs/Tab1';
import Tab2 from './components/tabs/Tab3';
import Tab3 from './components/tabs/Tab3';
import Header from './components/Header';



import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle}from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ToggleButton } from 'react-native-paper';
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const stack = () =>
       <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen   screenOptions = {
         {
            headerTitle:() =>{
                return <Header/>
              }
         }
       } name = "Home" component = {Home} />
          <Stack.Screen name = "Details" component = {Details}/>
           <Stack.Screen name = "Tabs" component = {Tabs}/>
          <Stack.Screen name = "TopTabs" children = {TopTabButtons}/>
          <Stack.Screen name = "BottomTabs" children = {BottomTabButtons}/>
      
      </Stack.Navigator> 

      const TopTabButtons = () =>
        <TopTab.Navigator>
          <TopTab.Screen name = "Tab1" component = {Tab1}/>
          <TopTab.Screen name = "Tab2" component = {Tab2}/>
          <TopTab.Screen name = "Tab3" component = {Tab3}/>
      </TopTab.Navigator> 

      const BottomTabButtons = ()=>
       <BottomTab.Navigator>
          <BottomTab.Screen name = "Tab1" component = {Tab1}/>
          <BottomTab.Screen name = "Tab2" component = {Tab2}/>
          <BottomTab.Screen name = "Tab3" component = {Tab3}/>
      </BottomTab.Navigator>



  
  return (
   
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name = "Home" children = {stack} />
        <Drawer.Screen name = "About" component = {About}/>
        <Drawer.Screen
        options = {{title:"My settings"}}
       
        name = "Settings" component = {Settings}/>
      </Drawer.Navigator>
      
      
    </NavigationContainer>
   
  );
}


