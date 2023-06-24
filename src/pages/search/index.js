import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const SearchPage = () => {
  const pessoasCadastradas = [
    { nome: 'João', telefone: 'Tel: (24)99999-9999', endereco: 'Endereço: Rua A, 123', recicla: 'Recicla: Garrafas PET' },
    { nome: 'Maria', telefone: 'Tel: (24)98765-4321', endereco: 'Endereço: Rua B, 456', recicla: 'Recicla: Pilhas, Baterias' },
    { nome: 'Pedro', telefone: 'Tel: (24)98765-4321', endereco: 'Rua C, 789', recicla: 'Recicla: Óleo de cozinha, Latinhas, Tampinhas' },
    { nome: 'Ana', telefone: 'Tel: (24)55555-5555', endereco: 'Rua D, 789', recicla: 'Recicla: Garrafas PET, Latinhas' },
    { nome: 'Carlos', telefone: 'Tel: (24)11111-1111', endereco: 'Rua E, 789', recicla: 'Recicla: Pilhas' },
    { nome: 'Mariana', telefone: 'Tel: (24)22222-2222', endereco: 'Rua F, 789', recicla: 'Recicla: Óleo de cozinha, Tampinhas' },
    { nome: 'Rafael', telefone: 'Tel: (24)33333-3333', endereco: 'Rua G, 789', recicla: 'Recicla: Garrafas PET, Óleo de cozinha' },
    { nome: 'Julia', telefone: 'Tel: (24)44444-4444', endereco: 'Rua H, 789', recicla: 'Recicla: Latinhas, Tampinhas' },
    { nome: 'Fernando', telefone: 'Tel: (24)55555-5555', endereco: 'Rua I, 789', recicla: 'Recicla: Pilhas, Baterias, Óleo de cozinha' },
    { nome: 'Patrícia', telefone: 'Tel: (24)66666-6666', endereco: 'Rua J, 789', recicla: 'Recicla: Garrafas PET, Latinhas, Tampinhas' },
    { nome: 'Gustavo', telefone: 'Tel: (24)77777-7777', endereco: 'Rua K, 789', recicla: 'Recicla: Óleo de cozinha, Baterias' },
    { nome: 'Carolina', telefone: 'Tel: (24)88888-8888', endereco: 'Rua L, 789', recicla: 'Recicla: Pilhas, Latinhas' },
  ];

  const renderPessoa = ({ item }) => (
    <View style={styles.pessoaContainer}>
      <Text style={styles.pessoaNome}>{item.nome}</Text>
      <Text style={styles.pessoaTelefone}>{item.telefone}</Text>
      <Text style={styles.pessoaEndereco}>{item.endereco}</Text>
      <Text style={styles.pessoaRecicla}>{item.recicla}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados da busca</Text>
      <FlatList
        data={pessoasCadastradas}
        renderItem={renderPessoa}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
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
    color: '#0e642f',
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  pessoaContainer: {
    width: Dimensions.get('window').width,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pessoaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pessoaTelefone: {
    fontSize: 16,
    marginBottom: 5,
  },
  pessoaEndereco: {
    fontSize: 16,
  },
  pessoaRecicla: {
    fontSize: 16,
  },
});

export default SearchPage;
