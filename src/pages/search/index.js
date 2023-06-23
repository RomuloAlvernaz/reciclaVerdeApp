import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados da busca</Text>
      {/* Aqui você pode adicionar os componentes para exibir os resultados da busca */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SearchPage;
