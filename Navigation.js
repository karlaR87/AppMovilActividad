// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/screen1';
import Screen from './screens/screen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculadora" component={Screen} />
        <Tab.Screen name="Lista" component={Screen1} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}