import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Settings() {
    return (
        <View style = {Styles.container}>
            <Text>Setting Page</Text>
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