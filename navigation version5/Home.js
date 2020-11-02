
import React,{useState} from 'react'
import { View, Text,FlatList,StyleSheet,TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Modall from './Modal'
import FormikModal from './FormikModal'

export default function Home({navigation}) {
    const [model,setModel] = useState(false)
    const [data,setData] = useState([
        {name:"mahesh",age:"21"},
        {name:"suresh",age:"22"}
    ])

   const addNew = (obj) =>{
        setData((prevData) =>[...prevData,obj])
        setModel(false)
    }
    
    return (
        <View style = {Styles.container}>
            <Modal visible = {model} animationType = {"slide"} >
               
                <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>

                   <View style = {Styles.modalContainer}>
                    <MaterialIcons name="close" size={24} color="black"
                    style = {{...Styles.addButton, ...Styles.closeButton}}
                    onPress = {()=>setModel(false)}
                    />

                   <FormikModal add = {addNew}/>
                   </View>

                </TouchableWithoutFeedback>
                
               
            </Modal>

                    <MaterialIcons
                    onPress = { () => setModel(true)}
                    style = {Styles.addButton}
                    name="add-circle-outline" size={24} color="black" />

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
        minWidth:250,
        alignItems:"center",
        marginVertical:5,
        borderWidth:1,
        borderRadius:10,
    },
    addButton:{
        borderRadius:5,
        marginVertical:20,
         padding:10,
         borderWidth:1,
       borderRadius:5 
    },
    closeButton:{
        marginTop:30,
        marginBottom:5,
       borderWidth:1,
       borderRadius:10,
       padding:5,
       alignSelf:"center" 
    },
    modalContainer:{
        flex:1,
        padding:18

    }
   
})
