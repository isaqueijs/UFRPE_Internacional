import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/HomeScreen'
import WebPage from './src/pages/WebPage'


const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="e-NINTER"
          component={HomeScreen}
          options={{
            // headerStatusBarHeight: -10,
            headerStyle: {
              backgroundColor: '#594C6F',
            },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="WebPage"
          component={WebPage}
          options={{
            // headerStatusBarHeight: -10,
            headerStyle: {
              backgroundColor: '#594C6F',
            },
            headerTintColor: '#FFFFFF',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
