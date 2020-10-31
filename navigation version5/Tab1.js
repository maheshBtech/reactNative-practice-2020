import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Tab1() {
    return (
        <View style = {Styles.container}>
            <Text>Tab1</Text>
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