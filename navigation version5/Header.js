import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style = {Styles.header}>
          
                <MaterialIcons style = {Styles.icon}  name="list" size={24} color="black" onPress={() => navigation.toggleDrawer()} />
         
                <Text > My Home</Text>
            
        </View>
    )
}
const Styles = StyleSheet.create({
   
    header:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",  
    },
    icon:{
        position:'absolute',
        left:0,
    }
   
})
