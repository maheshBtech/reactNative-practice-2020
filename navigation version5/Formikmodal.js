import React from 'react'
import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'



export default function FormikModal({add}) {
  const validation = Yup.object({
        name:Yup.string()
        .required("required")
        .min(5,"name should be morethan five characters"),
        age:Yup.string()
        .required("required")
    })
    return (
        
        <View style = {Styles.container}>
            <Formik
            initialValues = {{name:'',age:''}}
            onSubmit = {(values,action) =>{
                action.resetForm()
                add(values)
            }}
            validationSchema = {validation}
            
            >
                {
                (formik) =>(
                <View>
                <TextInput
                style = {Styles.input}
                placeholder = "Enter your name"
                onChangeText = {formik.handleChange('name')}
                value = {formik.values.name}
                />
                <Text style = {Styles.errorMsg}>{formik.errors.name}</Text>
                

                 <TextInput
                style = {Styles.input}
                keyboardType = {"numeric"}
                placeholder = "Enter your age"
                onChangeText = {formik.handleChange('age')}
                value = {formik.values.age}
                />
                 <Text style = {Styles.errorMsg}>{formik.errors.age}</Text>

                 <Button onPress = {formik.handleSubmit} title = "Update" />
               
                </View>
                )}


            </Formik>
        </View>
   
    )
}
const Styles = StyleSheet.create({
    container:{
       
        padding:10,   
    },
    input:{
       
        borderWidth:1,
        padding:10,
        minWidth:320,
        alignSelf:'center',
        borderRadius:5,
        marginVertical:5
    },
    errorMsg:{
        color:"red"
    }
})
