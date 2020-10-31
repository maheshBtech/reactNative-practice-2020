import React from 'react'
import { View, Text,Button,StyleSheet } from 'react-native'

export default function Tabs({navigation}) {
    return (
        <View style = {Styles.container}>
            <Text>Tabs</Text>
            
            <Button title = "Top tabs" onPress = {() =>navigation.navigate("TopTabs")}/>
            <Button title = "Bottom tabs" onPress = {() =>navigation.navigate("BottomTabs")}/> 
        </View>
    )
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});