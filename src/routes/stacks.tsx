import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PContacts from '../pages/contacts/Contacts';
import Home from '../pages/home';
import Login from '../pages/auths/login';
import Discussions from '../pages/chats/Discussions';
import Messages from '../pages/chats/Messages';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'rgb(255,90,50)',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle:{
          fontWeight: 'bold',
        }
        // headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'rgb(255,90,50)',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle:{
          fontWeight: 'bold',
        }
        // headerShown: false,
      }}>
      <Stack.Screen name="Discussions" component={Discussions} />
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}
export function ContactStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'rgb(255,90,50)',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle:{
          fontWeight: 'bold',
        }
        // headerShown: false,
      }}>
      <Stack.Screen name="Contacts" component={PContacts} />
    </Stack.Navigator>
  );
}
