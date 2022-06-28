import React from "react";
import {View,Text,Button} from "react-native";

function Settings({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
        title="go to Chat"
        onPress={()=>{
            navigation.navigate("Chat")
        }}
        />
      </View>
    );
  }
  export default Settings;