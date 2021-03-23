/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './app/views/Login'
import ListScreen from './app/views/List'

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
				<NavigationContainer>
					<Stack.Navigator 
						initialRouteName="Login"
					>
						<Stack.Screen 
							name="Login" 
							component={LoginScreen} 
							options={() => ({ headerShown: false })}
						/>
						
						<Stack.Screen 
							name="List" 
							component={ListScreen} 
							options={() => ({ headerShown: false })}
						/>

					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
    </>
  );
};

export default App;
