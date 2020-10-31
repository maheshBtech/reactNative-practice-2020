import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Tab2() {
    return (
        <View style = {Styles.container}>
            <Text>Tab2</Text>
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