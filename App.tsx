// 1. import `NativeBaseProvider` component
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Text, View} from 'native-base';
import Nav from './src/routes/navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
