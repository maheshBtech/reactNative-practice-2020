import React,{useState} from 'react'
import { View, Text,FlatList,StyleSheet,Button,TouchableOpacity } from 'react-native'

export default function Home({navigation}) {
    const [data,setData] = useState([
        {name:"maheswar reddy",age:"21",nik:"mahi1"},
          {name:"maheswar reddy",age:"22",nik:"mahi2"},
            {name:"maheswar reddy",age:"23",nik:"mahi3"}


    ])
    return (
        <View>
           
            <View>
                <FlatList
                keyExtractor = {(i) =>i.age}
                data = {data}
                renderItem = {({item}) =>
                   <View style = {styles.tableItem}>
                       <TouchableOpacity onPress = {() => navigation.navigate('Details',item)}>
                       <Text>{item.name}</Text>
                       </TouchableOpacity>
                       </View>
                  }
                />
              
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    tableItem:{
        borderWidth:1,
        margin:2,
        padding:10,
        borderStyle:"dashed",
        borderRadius:10

    }
})
