import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";


const Header = ({ tittle }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back" size={32} color="white" onPress={() => navigation.goBack()} />
            <Text style={styles.text} >{tittle}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FE79BF',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    text: {
        color: "white",
        fontSize: 22,
        marginLeft: 20,

    }
})