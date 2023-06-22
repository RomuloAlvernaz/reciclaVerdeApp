import React from 'react';
import { View, StyleSheet } from 'react-native';

const PageLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.greenArea} />
      <View style={styles.content}>{children}</View>
      <View style={styles.bottomBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  greenArea: {
    height: 120, 
    backgroundColor: '#6DE398',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bottomBar: {
    height: '10%',
    backgroundColor: '#c4c6c9',
  },
});

export default PageLayout;
