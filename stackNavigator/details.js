import React,{useState} from 'react'
import { View, Text,Button, StyleSheet } from 'react-native'

export default function Details({route,navigation}) {
    const[count,setCount] = useState(0)

  React.useLayoutEffect(() =>{
     
      navigation.setOptions({
          headerRight:() =>(
              <View>
                  <Button title = "count" onPress = {() => setCount((c)=> c+1)} />
              </View>
          ),
      });
  },[navigation])
   
    let data = route.params
    return (
        <View style = {Styles.container}>
           <Text>name:{data.name} age:{data.age}</Text>
           <Text>count: {count}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
       alignItems:"center"
    }
})
