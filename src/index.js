import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" animated backgroundColor="#222" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
