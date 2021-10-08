/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../screens/homeScreen';
import TaskDetails from '../screens/detailedTask';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Welcome' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack();
