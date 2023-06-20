import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import PageLayout from '../../styles/PageLayout/index.js';
import MyInput from '../../components/MyInput';

function LoginPage() {
  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <MyInput placeholder="Digite seu e-mail" />
        <MyInput placeholder="Digite sua senha" secureTextEntry={true} />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 24,
    color: '#6DE398',
    marginBottom: 20,
  },
});

export default LoginPage;
