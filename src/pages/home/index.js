import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton/index'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenArea}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.whiteArea}>
      <MyInput />

      <Text style={styles.categoryText}>
      Procure acima acategoria {'\n'}que deseja reciclagem!
        </Text>

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
          <MyButton></MyButton>
          
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: -30,
  },
  whiteArea: {
    flex: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '100%',
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
    borderRadius: 0,
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

