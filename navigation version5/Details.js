import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'

export default function Details({route,navigation}) {
    React.useLayoutEffect(() =>{
    navigation.setOptions({
        headerRight:()=>
        <View>
            <Button title = "Back" onPress = {() =>navigation.goBack()}/>
        </View>
    })
})
    let data = route.params
    return (
        <View style = {Styles.container}>
            <Text>Name : {data.name}  Age : {data.age}</Text>
           <Button title = "Tabs" onPress = {() =>navigation.navigate('Tabs')}/>
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
