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
        <Stack.Screen name="e-NINTER" component={HomeScreen} />
        <Stack.Screen name="WebPage" component={WebPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
