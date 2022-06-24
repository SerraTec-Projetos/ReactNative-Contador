import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View, TouchableHighlight } from 'react-native';




export default function App() {
  const [contador, setContador] = useState(10);

  const handleCount = () => {
    setContador(contador - 1)
    if (contador <= 0) {
      setContador(0)
    }
  }
  const handleReset = () => {
    setContador(10)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >CONTADOR:  {contador}</Text>
      <TouchableHighlight underlayColor='white' onPress={handleCount} style={styles.button} ><Text>CONTAGEM</Text></TouchableHighlight>
      <TouchableHighlight underlayColor='white' onPress={handleReset} style={styles.button}><Text>RESET</Text></TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40
  },
  button: {
    margin: 10,
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#F83'
  }

});
