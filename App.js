/* eslint-disable prettier/prettier */
import React,{Component,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
//Screens
import Home from './src/screens/Home';


class App extends Component  {
  render(){
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}}

const Stack = createNativeStackNavigator();

export default App;
