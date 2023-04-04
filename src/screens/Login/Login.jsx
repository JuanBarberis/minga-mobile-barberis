import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Button, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../store/User/actions";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import bottomTabsActions from "../../store/BotomTabs/actions";

const { reloadBottomTabs } = bottomTabsActions

const Login = () => {

    const dispatch = useDispatch()
    let state = useSelector(store => store)


    const storeData = async () => {
        try {
            await AsyncStorage.setItem('token', "1234asd")

        } catch (e) {
          
            console.log(e)
        }
    }
    const deleteData = async () => {
        try {
            await AsyncStorage.setItem('token', "")
        } catch (e) {
            
            console.log(e)
        }
    }
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('token')
        } catch (e) {
            console.log(e)
            
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()


    async function handleSignIn() {

        let data = {
            mail: email,
            password: password
        }

        let url = 'https://minga-pjxq.onrender.com/api/auth/signin'
        let admin
        let author
        let user
        let token


        try {
            await axios.post(url, data).then(res => {
                res.data.user.is_admin ? (admin = true) : (admin = false)
                res.data.user.is_author ? (author = true) : (author = false)

                user = res.data.user 

                token = res.data.token 


                dispatch(userAction.change_user_status({ status: true }))
                dispatch(userAction.user_action({ data: res.data.user }))
            })
            await AsyncStorage.setItem('token', token) 

        } catch (error) {
            console.log('ERROR' + error)
        }
    }

    return (
        <ScrollView style={styles.loginForm}>

            <View style={styles.loginContent}>
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeSectionH2}>Welcome <Text style={styles.link}>back</Text> !</Text>
                    <Text style={styles.welcomeSectionP}>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.fieldset}>
                        <Text style={styles.legend}>Email</Text>
                        <TextInput name="mail" id="mail" style={styles.input} onChangeText={inputText => setEmail(inputText)} />
                    </View>
                    <View style={styles.fieldset} id='field-password'>
                        <Text style={styles.legend}>Password</Text>
                        <TextInput secureTextEntry={true} name="password" id="password" style={styles.input} onChangeText={inputText => setPassword(inputText)} />
                    </View>
                    <TouchableOpacity title="SingIn" onPress={handleSignIn} style={styles.sign}  >
                        <Text style={styles.signText}>SignIn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    loginForm: {
        width: '100%',
        backgroundColor: 'white',
        padding: '10%',

    },
    loginContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 80,
        padding: 15,
        gap: 15,
    },
    welcomeSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 11,
        width: '100%',
    },
    welcomeSectionH2: {
        textAlign: 'center',
        width: '100%',
        height: 39,
        fontWeight: '600',
        fontSize: 32,
    },
    welcomeSectionP: {
        textAlign: 'center',
        width: '100%',
        fontWeight: '600',
        fontSize: 12,
        color: '#1f1f1fbf'
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 22,
        marginTop: '10%',
        paddingTop: 50
    },
    fieldset: {
        width: '100%',
        height: 48,
        backgroundColor: '#EBEBEB',
        borderWidth: 1,
        borderColor: 'rgba(31, 31, 31, 0.5)',
        position: 'relative',
        marginHorizontal: 'auto',
        borderRadius: 5,

    },
    legend: {
        fontWeight: '400',
        fontSize: 12,
        backgroundColor: 'transparent',
        paddingLeft: 15,
        borderRadius: 1,
        borderBottomEndRadius: -5,
        backgroundColor: '#ff1493',
        color: '#EBEBEB',
        fontSize: 12,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        width: '90%',
        marginLeft: 15,
        height: 25
    },
    sign: {
        width: '100%',
        height: 48,
        backgroundColor: '#ff1493',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        borderRadius: 5,
    },
    signText: {
        color: '#EBEBEB',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 0.05,
        width: '100%',
        textAlign: 'center',
    },

    loginText: {
        textAlign: 'center'
    },
    link: {
        textDecorationLine: 'none',
        color: '#ff1493',
        fontWeight: 'bold'
    }
})

export default Login