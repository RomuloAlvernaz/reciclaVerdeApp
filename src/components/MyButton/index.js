import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SuperButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Cadastro</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    width: '60%',
    height: 50,
    marginBottom: -110,
    backgroundColor: '#6DE398',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuperButton;
