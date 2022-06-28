import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../container/Home";
import Settings from "../container/Settings";
import Chats from "../container/Chats";
import Profil from "../container/Profil";
import RegisterScreen from "../container/RegisterScreen";
import BottomTabNavigator from "./TabsStack"
import BottomDrawerNavigator from "./DrawerStack";
const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={Home}

        options={{
          title: 'Home',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#7e91b3',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => null
        }}
      />
      
    </Stack.Navigator>
  );
}
const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Chat"
        component={Chats}
        options={{
          title: 'Chat',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#7e91b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => null
        }} />

    </Stack.Navigator>
  );
}
const RegisterScreenStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'RegisterScreen',
          headerShown:false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#7e91b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => null
        }} />

    </Stack.Navigator>
  );
}
const ProfilScreenStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{
          
          title: 'Profil',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#7e91b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => null
        }} />

    </Stack.Navigator>
  );
}
const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#7e91b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: (props) => null
        }} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, SettingsStackNavigator, ChatStackNavigator, ProfilScreenStackNavigator, RegisterScreenStackNavigator };