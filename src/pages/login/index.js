import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import InputLogin from '../../components/InputLogin/index.js'
import MeuBotao from '../../components/Botao/index.js'
import { useNavigation } from '@react-navigation/native';


function LoginPage() {
  const navigation = useNavigation();
  
  const entrar = () => {
    navigation.navigate('Home');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <InputLogin 
        label="Email"
        placeholder="Digite seu e-mail"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        label="Senha"
        placeholder="Digite sua senha"
        comMascara={true}
      ></InputLogin>

      <View style={styles.boxRecuperarSenha}>
        <Text style={styles.recuperarSenha}>Recuperar senha</Text>
      </View>

      <MeuBotao 
        value={"Entrar"}
        acao={entrar}
      ></MeuBotao>
      <View style={styles.bottomBar}>
        <Text style={styles.barText}></Text>
      </View>
    </View>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loginText: {
    color: '#0e642f',
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  boxRecuperarSenha: {
    width: 300,
    justifyContent: "flex-end",
    textAlign: "right",
  },
  recuperarSenha: {
    color: "#0e642f",
  },
  bottomBar: {
    height: 70,
    width: 380,
    backgroundColor: '#c4c6c9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:-130,
    marginTop: 90, 
  },
});

export default LoginPage;
