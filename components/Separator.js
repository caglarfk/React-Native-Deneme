import React from "react";
import { View,StyleSheet } from "react-native";

const Separator=()=>{
    return(
        <View style={styles.separator}/>
 
    )
}
const styles = StyleSheet.create({
    separator: {
        marginStart:10,
        marginEnd:10,
        marginVertical: 8,
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
}});
export default Separator;
