import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { activeUserDrawer, noActiveUser } from "./IndexScreens";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../store/User/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';




const DrawerItem = ({ name, navigation }) => {

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(name)}>
            <View style={styles.item}>
                <Text style={styles.navmenu}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const CustomDrawer = ({ navigation }) => {

    const profile = useSelector(store => store.user.login)
    const user = useSelector(store => store.user.user)

    const dispatch = useDispatch()

    

    const deleteUser = async () => {
        try {
            await AsyncStorage.removeItem('token')
        } catch (e) {
            console.log(e)
        }
        dispatch(userAction.change_user_status({ status: false }))
    }
   

  
    return (
        <View style={styles.container}>

            {
                profile
                &&
                user
                &&
                <View style={styles.user}>

                    <Image
                        source={{ uri: user.photo }}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.profile}>{user.mail}</Text>

                </View>
            }

            <DrawerItem name={"Home"} navigation={navigation} />
            {
                profile
                    ?
                    activeUserDrawer.map((item, i) => {
                        return (
                            <DrawerItem key={i} name={item.name} navigation={navigation}  />
                        )
                    })
                    :
                    noActiveUser.map((item, i) => {
                        return (
                            <DrawerItem key={i} name={item.name} navigation={navigation}  />
                        )
                    })
            }

            {
                profile
                &&
                <TouchableWithoutFeedback onPress={() => deleteUser()}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableWithoutFeedback>
            }
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff1490",
        width:'100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems:'center'
        
    },
    item: {
        padding: 4,
        marginTop: 4,
        textAlign: "center",
        color: 'white',
    },
    navmenu:{
        padding: 4,
        marginTop: 4,
        textAlign: "center",
        color: 'white',
        fontSize:18,
        fontWeight: 'bold',
    },
    user: {
        backgroundColor: "#ff1490",
        height: "25%",
        color: 'black',
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap:8,
        paddingTop:30,
        color: 'white',
    },
    profile: {
        fontSize:18,
        fontWeight: 'bold',
        marginTop:10,
        color: 'white',
    },
    logout:{
        fontSize:18,
        fontWeight: 'bold',
        marginTop:10,
        color: 'white',
       
    }
})