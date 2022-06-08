import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Pages} from 'RootStackPageList';

type testNavigationProp = StackNavigationProp<Pages, 'TestPage'>;

const TestPage = () => {
  const navigation = useNavigation<testNavigationProp>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Test Page!</Text>
      <Button title="Go to Home Page" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
export default TestPage; 