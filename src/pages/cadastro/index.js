import React from "react";
import { Text, StyleSheet, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import InputLogin from '../../components/InputLogin/index.js'
import MeuBotao from '../../components/Botao/index.js'
import { useNavigation } from '@react-navigation/native';

function CadastroPage() {

  const navigation = useNavigation();
  
  const enviar = () => {
    Alert.alert("Cadastro realizado com sucesso!", "Faça login para continuar.")
    navigation.navigate('Home');
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
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
