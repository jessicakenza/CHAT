import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'native-base';
import Login from '../pages/auths/login';
import Home from '../pages/home';
import Tabs from './Tabs';

const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function Nav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
