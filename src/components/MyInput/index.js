import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from 'react-native';

const MyInput = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.label}</Text>
      <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      ></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 15,
    marginTop: -90,
    padding: 10,
    width: 320,
    fontSize: 18,
    color: "#1a1a1a",
    borderRadius: 4,
  }
});

export default MyInput;
