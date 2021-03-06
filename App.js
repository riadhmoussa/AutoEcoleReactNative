import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import ListCandidateScreen from './pages/ListCandidateScreen';
import ListExamenScreen from './pages/ListExamenScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import AddCandidateScreen from './pages/AddCandidateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={ListCandidateScreen}
          options={{ headerShown: false }}
         />
        <Stack.Screen
          name="Details"
          component={ListExamenScreen}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="Details"
        component={ListExamenScreen}
        options={{ title: 'Details Page' }}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}
        options={{ headerShown: false }}/>
        <Stack.Screen
        name="?????????? ??????????"
        component={AddCandidateScreen}
        options={{ title: '?????????? ??????????' }}
        options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={ListCandidateScreen}
          options={{
            tabBarLabel: '?????????? ????????????????',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={size}
              />
            ),
          }}  />

        <Tab.Screen
          name="?????????? ??????????"
          component={AddCandidateScreen}
          options={{
            tabBarLabel:"?????????? ??????????",
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons
                name="plus"
                color={color}
                size={size}
              />
            ),
          }}/>
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: '???????????? ??????????????',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="timer-outline"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
          name="???????????? ????????????????"
          component={ListExamenScreen}
          options={{
            tabBarLabel:'???????????? ????????????????',
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons
              name="note"
              color={color}
              size={size}
              />
            ),
          }

          }
          />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default  App;

