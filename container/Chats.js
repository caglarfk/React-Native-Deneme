import React from 'react';
import { SafeAreaView, StyleSheet} from "react-native";
import Separator from '../components/Separator';
import ContactRow from '../components/ContactRow';


function Chats() {
    return (
        <SafeAreaView style={styles.container}>
             
            <ContactRow />
            <Separator />
            <ContactRow />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20
    }
});

export default Chats;
