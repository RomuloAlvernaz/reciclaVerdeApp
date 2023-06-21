import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton/index';
import LoginButton from '../../components/LoginButton/index.js'



const HomeScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = () => {
    console.log('Clicou em Login');
    navigation.navigate('Login');
  };

  const handleCadastroPress = () => {
    console.log('Clicou em Cadastro');
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenArea}>
        <View style={styles.contentWrapper}>
          <View style={styles.logo}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
          </View>
          <View style={styles.buttonContainer}>
            <LoginButton onPress={handleLoginPress} />
          </View>
        </View>
      </View>

      <View style={styles.whiteArea}>
        <MyInput placeholder="Digite aqui a sua busca" value={inputText} onChangeText={handleInputChange} />

        <Text style={styles.categoryText}>Procure acima a categoria{'\n'}que deseja reciclagem!</Text>

        <View style={styles.rectangleWrapper}>
          <View style={styles.rectangle}>
            <Text style={styles.rectangleText}>
              Garrafas Pet, Tampinhas,{'\n'}
              Latinhas, Óleo de Cozinha,{'\n'}
              Pilhas e Baterias.
            </Text>
          </View>

          <View style={styles.greenRectangle}>
            <Text style={styles.greenRectangleText}>
              Se você trabalha com reciclagem,{'\n'}
              cadastre-se no botão abaixo, é grátis!
            </Text>
          </View>

          <MyButton onPress={handleCadastroPress} text="Cadastro" />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Text style={styles.barText}>Ajude a salvar nosso Planeta!</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greenArea: {
    flex: 2,
    backgroundColor: '#6DE398',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: -60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    right: -100,
    marginBottom: -25,
  },
  whiteArea: {
    flex: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    marginBottom: 10,
    marginLeft: 270,
    marginTop: 50,
  },
  categoryText: {
    color: 'black',
    fontSize: 16,
    marginBottom: -25,
    marginTop: -30,
  },
  rectangleWrapper: {
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  rectangle: {
    width: '90%',
    height: '60%',
    borderRadius: 20,
    backgroundColor: '#c4c6c9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    color: '#0e642f',
    fontSize: 22,
    textAlign: 'center',
  },
  greenRectangle: {
    marginTop: 20,
    width: '80%',
    height: '27%',
    borderRadius: 4,
    backgroundColor: '#6DE398',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenRectangleText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  bottomBar: {
    height: '10%',
    backgroundColor: '#c4c6c9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barText: {
    color: '#0e642f',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

