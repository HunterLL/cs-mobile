import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const name = "Hunter";
  const [inputText, setInputText] = useState('');
  console.log(inputText);

  function handleInputText(changedText) {
    console.log(changedText);
    setInputText(changedText);
  }
  

  return (
    <View style={styles.container}>
      <Header name={name} version={2}>
        <Text>🫡🫡🫡🫡 </Text>
        <Text>hahahah </Text>
      </Header>
      <Input changeTextCallBack={handleInputText}/>
      {/* <TextInput style={styles.input}/> */}
      <Text>{inputText}</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: 200,
    color: "red"
  }
});
