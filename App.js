import React ,{useEffect,useState}from 'react';
import {Text,View,StyleSheet, FlatList } from 'react-native';
import GlobalStyleSheet from './components/Stylesheet';

import Axios from 'axios';

export default function App()
{
  const [data,setData] = useState([])

  useEffect(() =>{
    fetchData()
  },[])
 

 const fetchData = async() =>{
   await Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((res) =>
    {
       setData(res.data)
    })
    .catch((err) =>console.log(err))
  }



  return(
    <View style = {GlobalStyleSheet.container}>
     <Text>hello</Text>

     <View style = {Styles.itemContaier}>
        <FlatList
      keyExtractor = {(i) =>i.email}
      data = {data}
      renderItem = {({item}) =>(
      <View style = {Styles.item}>
         <Text>{item.body}</Text>
        </View>
          )}
       />
     </View>

    </View>
  )
}
const Styles = StyleSheet.create({
  itemContaier:{
    padding:20
  },
  item:{
    borderWidth:1,
    padding:10,
    borderRadius:5,
    marginVertical:5,
  }
})