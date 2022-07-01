import { createStackNavigator } from '@react-navigation/stack';
import React, { Profiler } from 'react';
import Login from '../pages/auths/login';
import Tabs from './Tabs';
import Etat from '../pages/gestion/etat';
import Profile from '../pages/auths/profil';
import Messages from '../pages/chats/Messages';

const Stack = createStackNavigator();

export default function Nav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name= "Etat" component={Etat} />
      <Stack.Screen name="tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
