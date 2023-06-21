import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import PageLayout from '../../styles/PageLayout/index.js';
import MyInput from '../../components/MyInput';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {
  const navigation = useNavigation();
  
  return (
    <PageLayout>
      <View style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.loginText}>Login</Text>
        <MyInput placeholder="Digite seu e-mail" />
        <MyInput placeholder="Digite sua senha" secureTextEntry={true} />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  
  logo: {
    position: 'absolute',
    top:-110,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  loginText: {
    fontSize: 24,
    color: '#0e642f',
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center", 
    marginBottom: 150, 
  },
});

export default LoginPage;
