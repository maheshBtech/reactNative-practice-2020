import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function About() {
    return (
        <View style = {Styles.container}>
            <Text>About Page</Text>
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
