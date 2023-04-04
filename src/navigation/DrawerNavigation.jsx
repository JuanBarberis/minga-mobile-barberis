import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import { activeUser, noActiveUser } from './IndexScreens';
import { useSelector } from 'react-redux';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    //controlamos si existe un usuario logeado
    const user = useSelector(store => store.user.login)

    return (
        <Drawer.Navigator
            backBehavior='history'
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name={"Home"}
                component={HomeScreen}
            />
            {
                user
                    ?
                    activeUser.map((item, i) => {
                        return (
                            <Drawer.Screen
                                key={i}
                                name={item.name}
                                component={item.component}
                                options={{
                                    headerShown: false
                                }}
                            />
                        )
                    })
                    :
                    noActiveUser.map((item, i) => {
                        return (
                            <Drawer.Screen
                                key={i}
                                name={item.name}
                                component={item.component}
                                options={{
                                    headerShown: false
                                }}
                            />
                        )
                    })
            }
        </Drawer.Navigator>
    )
}


export default DrawerNavigation
