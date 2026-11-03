import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { TelaAmazonia } from './fonte/TelaAmazonia';
import { TelaCerrado } from './fonte/TelaCerrado';
import { TelaMataAtlantica } from './fonte/TelaMataAtlantica';

const nav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <nav.Navigator
        initialRouteName="Amazônia"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#176b52',
          tabBarInactiveTintColor: '#74857b',
          tabBarStyle: { height: 68, paddingTop: 8, paddingBottom: 9, backgroundColor: '#fffdf8', borderTopColor: '#e5e9df' },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
        }}
      >
        <nav.Screen name="Amazônia" component={TelaAmazonia} options={{ tabBarLabel: 'Amazônia' }} />
        <nav.Screen name="Cerrado" component={TelaCerrado} options={{ tabBarLabel: 'Cerrado' }} />
        <nav.Screen name="Mata Atlântica" component={TelaMataAtlantica} options={{ tabBarLabel: 'Mata Atlântica' }} />
      </nav.Navigator>
    </NavigationContainer>
  );
}
