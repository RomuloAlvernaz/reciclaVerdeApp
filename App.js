import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './src/pages/home/index';
import SplashScreen from './src/pages/splash/index';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginPage from './src/pages/login/index';
import CadastroPage from './src/pages/cadastro/index'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { backgroundColor: '#6DE398' },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerLeftContainerStyle: styles.headerLeftContainer,
          }}
        />
         <Stack.Screen
          name="Cadastro"
          component={CadastroPage}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: { backgroundColor: '#6DE398' },
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerLeftContainerStyle: styles.headerLeftContainer,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerLeftContainer: {
    marginTop: 60,
  },
});
