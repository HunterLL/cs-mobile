import { View, Text } from 'react-native'
import React from 'react'

const Header = ( props ) => {
  console.log(props);
  return (
    <View>
      <Text>Welcome to {props.name} app</Text>
      <Text>{props.children[0]}</Text>
    </View>
  )
}

export default Header