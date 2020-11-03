import React,{useState} from 'react'
import {View,Text,Modal,TextInput, Button,StyleSheet,
TouchableWithoutFeedback,Keyboard,FlatList,TouchableOpacity} from 'react-native'
import GlobalStyleSheet from './components/Stylesheet';

import { MaterialIcons } from '@expo/vector-icons';




export default function App(){
  const [modal, setModal] = useState(false);
  const [data,setData] = useState([{name:"mahesh",age:"21",key:"123"}]);
  const[name,setName] = useState();
  const[age,setAge] = useState();

  const add = (obj) =>{
        
    setData(prevData =>[...prevData,obj])
  }

  const createobj = () =>{
    
    if(name && age)
    {
        const obj = {name,age,key:Date.now().toString()}
        add(obj)
        setName();
        setAge();
        setModal(false)
    }
  }

  const onclick = (key) =>{
 
    setData((prevData) =>prevData.filter(i => i.key != key))

  }


  return(
    <View style = {GlobalStyleSheet.container}>
      <Text style = {Styles.header}>ToDo APP</Text>
      
      <MaterialIcons name="add" size={24} color="black"
      onPress = { () => setModal(true)}
      style = {Styles.openButton}
      />


      <Modal visible = {modal} >
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
        <View style = {Styles.modal}>
          <MaterialIcons
          style = {Styles.closeButton}
          name="close" size={24} color="black"
          onPress = { () => setModal(false)}
          />

        <TextInput
        onChangeText = {(e) =>setName(e)}
        style = {GlobalStyleSheet.input}
        placeholder = "Enter  your name"
        />
        <TextInput
        keyboardType = "numeric"
         onChangeText = {(e) =>setAge(e)}
        style = {GlobalStyleSheet.input}
        placeholder = "Enter your age"
        />
        <Button title = "Save" onPress ={ () =>createobj()}/>
        </View>
      
      </TouchableWithoutFeedback>
      </Modal>

      <View>
        <FlatList
        data = {data}
        renderItem = {({item})=>(
      <TouchableOpacity onPress = {() =>onclick(item.key)}>
          <Text style = {Styles.item}> Name : {item.name} Age : {item.age}</Text>
      </TouchableOpacity>
        )}
        />
      </View>
      
    </View>
  )
}

const Styles = StyleSheet.create({
  header:{
    fontSize:30,
    fontWeight:"bold",
    
    
  },
  modal:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:20
  },
  closeButton:{
    alignSelf:"center",
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginVertical:5
  },
  openButton:{
    alignSelf:"center",
    borderWidth:1,
    borderRadius:10,
    padding:10,
    marginVertical:5
  },
  item:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    minWidth:200,
    marginVertical:5
  }

})