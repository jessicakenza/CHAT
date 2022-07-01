import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from '../pages/auths/profil';
import Discussions from '../pages/chats/Discussions';
import Messages from '../pages/chats/Messages';
import PContacts from '../pages/contacts/Contacts';
import Etat from '../pages/gestion/etat';
import Home from '../pages/home';

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
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Etat" component={Etat} />
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
