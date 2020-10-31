
import React,{useState} from 'react'
import { View, Text,FlatList,StyleSheet,TouchableOpacity,Button } from 'react-native'

export default function Home({navigation}) {
    const [data,setData] = useState([
        {name:"mahesh",age:"21"},
        {name:"suresh",age:"22"}
    ])
    
    return (
        <View style = {Styles.container}>
            <FlatList
            keyExtractor = {(i) =>i.age}
            data = {data}
            renderItem = {({item}) =>
         
              <TouchableOpacity style = {Styles.item} onPress = {() =>navigation.navigate('Details',item)}>
               <Text>{item.name}</Text>
          </TouchableOpacity>
        
               }
                />
       
            
            
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    item:{
           
        padding:10,
        marginVertical:5,
        borderWidth:1,
        borderRadius:10,

    }
})
