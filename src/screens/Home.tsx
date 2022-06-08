import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Pages} from 'RootStackPageList';

type homeNavigationProp = StackNavigationProp<Pages, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeNavigationProp>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home Page!</Text>
      <Button title="Go to Test Page" onPress={() => navigation.navigate('TestPage')} />
    </View>
  );
};
export default Home; 