import React from "react";
import {View,Text,Button} from "react-native";
import Separator from "../components/Separator";



function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home Screen</Text>
        <Separator/>
        <View>
             <Button
        title="go to login"
        onPress={()=>{
         navigation.openDrawer();
        }}
        />
        </View>
       <Separator/>
        <View>
             <Button
        title="go to register"
        onPress={()=>{
            navigation.navigate("RegisterScreen")
        }}
        />

        </View>
        
       
      </View>
    );
  }
  export default Home;