import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({changeTextCallBack}) => {
  return (
    // <View>
    //   <Text>input</Text>
      <TextInput style={styles.input} onChangeText={changeTextCallBack}/>
    // </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      width: 200,
      color: "red"
    }
  });
  
export default Input