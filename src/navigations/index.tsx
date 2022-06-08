import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from '~/navigations/StackNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;