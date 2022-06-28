import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator, SettingsStackNavigator} from "./MainStack";
import {Ionicons} from "@expo/vector-icons"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : "home-outline";
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }/* else if (route.name === 'Chats') {
                iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
              } */
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown:false
          })}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
               
                 />

            <Tab.Screen 
            name="Settings" 
            component={SettingsStackNavigator}
           
        />
          
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;
