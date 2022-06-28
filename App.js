import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomDrawerNavigator from './route/DrawerStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="DrawerNavigator" component={BottomDrawerNavigator} />

      </Stack.Navigator>


    </NavigationContainer>


  );
}

export default App;

