import React from 'react'
import { Title, Avatar, Caption, TouchableRipple } from 'react-native-paper'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
function Profil() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Avatar.Image
                        source={require('../assests/img/img_avatar.png')}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
                            John Doe
                        </Title>
                        <Caption style={styles.caption}>j_joe</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Ionicons name="location-outline" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Ankara</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="call-outline" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>+90-546204723</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="mail-outline" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Ankara@gmail.com</Text>
                </View>

            </View>

            <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox, {
                    borderRightColor: "#dddddd",
                    borderRightWidth: 1
                }]}>
                    <Title>140TL</Title>
                    <Caption>Wallet</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Orders</Caption>
                </View>
            </View>
            <View style={styles.menuWrapper}>
                <TouchableRipple>
                    <View style={styles.menuItem}>
                        <Ionicons name="heart-outline" size={20} />
                        <Text style={styles.menuItemText}>
                            Your favorites
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={styles.menuItem}>
                        <Ionicons name="card-outline" size={20} />
                        <Text style={styles.menuItemText}>
                            Payment
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={styles.menuItem}>
                        <Ionicons name="share-social-outline" size={20} />
                        <Text style={styles.menuItemText}>
                            Tell Your Friends
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={styles.menuItem}>
                        <Ionicons name="person-circle-outline" size={20} />
                        <Text style={styles.menuItemText}>
                            Support
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={styles.menuItem}>
                        <Ionicons name="settings-outline" size={20} />
                        <Text style={styles.menuItemText}>
                            Settings
                        </Text>
                    </View>
                </TouchableRipple>
            </View>

        </SafeAreaView>
    )
}
export default Profil;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25
    },
    title: {
        fontSize: 14,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineWeight: "500",
        lineHeight: 14
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100,

    },

    infoBox: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center"
    },

    menuWrapper: {
        marginTop: 10
    },

    menuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30
    },

    menuItemText: {
        color: "#7777777",
        marginLeft: 20,
        fontWeight: "600",
        fontSize:16,
        lineHeight:26

    },
})