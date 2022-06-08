import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/screens/Home';
import TestPage from '~/screens/TestPage';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TestPage" component={TestPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;