import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigation}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AppNavigation


