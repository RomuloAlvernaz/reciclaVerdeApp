import React from "react";
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import InputLogin from '../../components/InputLogin/index.js'
import MeuBotao from '../../components/Botao/index.js'
import { useNavigation } from '@react-navigation/native';

function CadastroPage() {
  const navigation = useNavigation();
  
  const enviar = () => {
    Alert.alert("Cadastro realizado com sucesso!", "Faça login para continuar.");
    navigation.navigate('Home');
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.cadastroText}>Cadastre-se</Text>

      <InputLogin 
        placeholder="Nome:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="CPF/CNPJ:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="Endereço:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="Telefone:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="O que você recicla:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="E-mail:"
        comMascara={false}
      ></InputLogin>

      <InputLogin 
        placeholder="Senha:"
        comMascara={true}
      ></InputLogin>
      
      <InputLogin 
        placeholder="Repita a senha:"
        comMascara={true}
      ></InputLogin>

        <MeuBotao 
          value={"Enviar"}
          acao={enviar}
        ></MeuBotao>
      </ScrollView>
    </KeyboardAvoidingView>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  cadastroText: {
    color: '#0e642f',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default CadastroPage;
