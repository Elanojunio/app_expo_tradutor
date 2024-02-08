import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MyComponent() {
  const handleButton1Press = () => {
    alert('Botão 1 pressionado!');
  };

  const handleButton2Press = () => {
    alert('Botão 2 pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>tradutor</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButton1Press}>
          <Text>Ingles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
          <Text>Portugues</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  paragraph: {
    marginBottom: 200,
    textAlign: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#87baab',
    padding: 10,
    marginHorizontal: 5,
  },
});