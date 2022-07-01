import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, Text, View} from 'native-base';
import Nav from './src/routes/navigation';
import { DeviceEventEmitter } from 'react-native';

export default function App() {
  DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
    console.log(msg);
  });

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
