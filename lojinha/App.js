import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Produto from './src/pages/Produto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Loja do Ajax Lima: LOGIN',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Loja do Ajax Lima: LOJA',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Produto"
          component={Produto}
          options={{
            title: 'Loja do Ajax Lima: PRODUTO',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
