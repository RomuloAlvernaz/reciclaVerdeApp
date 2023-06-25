import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MyButton from '../../components/MyButton/index';
import LoginButton from '../../components/LoginButton/index.js';

const HomeScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleLoginPress = () => {
    console.log('Clicou em Login');
    navigation.navigate('Login');
  };

  const handleCadastroPress = () => {
    console.log('Clicou em Cadastro');
    navigation.navigate('Cadastro');
  };

  const handlePesquisaPress = () => {
    console.log('Clicou em Pesquisa');
    navigation.navigate('Pesquisa');
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (!isFocused) {
      setSelectedCategories([]);
    }
  }, [isFocused]);

  const handleCategoryPress = (category) => {
    let updatedCategories = [...selectedCategories];
    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchPage', { categories: selectedCategories });
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

      <View style={styles.categoryButtons}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategories.includes('garrafasPet') && styles.selectedCategoryButton,
          ]}
          onPress={() => handleCategoryPress('garrafasPet')}
        >
          <Image source={require('../../../assets/drink.png')} style={styles.icon} />
          <Text>Garrafas PET</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategories.includes('tampinhas') && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress('tampinhas')}
          >
            <Image source={require('../../../assets/tampa.png')} style={styles.icon} />
            <Text>Tampinhas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategories.includes('latinhas') && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress('latinhas')}
          >
            <Image source={require('../../../assets/lata.png')} style={styles.icon} />
            <Text>Latinhas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategories.includes('oleoDeCozinha') && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress('oleoDeCozinha')}
          >
             <Image source={require('../../../assets/oleo.png')} style={styles.icon} />
            <Text>Óleo de Cozinha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategories.includes('pilhas') && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress('pilhas')}
          >
            <Image source={require('../../../assets/pilha.png')} style={styles.icon} />
            <Text>Pilhas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategories.includes('baterias') && styles.selectedCategoryButton,
            ]}
            onPress={() => handleCategoryPress('baterias')}
          >
            <Image source={require('../../../assets/bateria.png')} style={styles.icon} />
            <Text>Baterias</Text>
          </TouchableOpacity>

      </View>

      <MyButton
      style={styles.stylePesquisa} 
      onPress={handlePesquisaPress} text="Pesquisar" />

        <View style={styles.greenRectangle}>
          <Text style={styles.greenRectangleText}>
            Trabalha com reciclagem?{'\n'}
            cadastre-se no botão abaixo, é grátis!
          </Text>
        </View>

        <MyButton onPress={handleCadastroPress} text="Cadastro" />
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
  rectangleWrapper: {
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  greenRectangle: {
    marginTop: 130,
    width: '80%',
    height: '15%',
    borderRadius: 4,
    backgroundColor: 'transparent',
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
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: -120,
    marginBottom: -10,
  },
  
  categoryButton: {
    width: 100,
    height: 100,
    backgroundColor: '#c4c6c9',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  selectedCategoryButton: {
    backgroundColor: '#6DE398',
  },
  stylePesquisa:{
    marginBottom: 50,
    marginTop:5, 
  },
  icon: {
    width: 24,
    height: 40,
  },
  
  
});

export default HomeScreen;

