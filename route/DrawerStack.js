import React from "react";
import {   createDrawerNavigator,} from '@react-navigation/drawer';
import { HomeStackNavigator, SettingsStackNavigator,ChatStackNavigator,ProfilScreenStackNavigator } from "./MainStack";
import {Ionicons} from "@expo/vector-icons"
import BottomTabNavigator from "./TabsStack"
import CustomDrawer from "../components/CustomDrawer";
const Drawer = createDrawerNavigator();

const BottomDrawerNavigator = () => {
    return (  
        <Drawer.Navigator  
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
              marginLeft: -25,
              fontFamily: 'Roboto-Medium',
              fontSize: 15,
            }}}
        >
         <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
       <Drawer.Screen
        name="Profil"
        component={ProfilScreenStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chats"
        component={ChatStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbubbles-outline" size={22} color={color} />
          ),
        }}
      />
      
      </Drawer.Navigator>

    );
};
export default BottomDrawerNavigator;
