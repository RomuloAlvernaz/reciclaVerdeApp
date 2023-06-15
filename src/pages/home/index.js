import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenArea} />
      <View style={styles.whiteArea}>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>
            Garrafas Pet, Tampinhas,{'\n'}
            Latinhas, Óleo de Cozinha,{'\n'}
            Pilhas e Baterias.
          </Text>
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
  },
  whiteArea: {
    flex: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    width: 350,
    height: 170,
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



