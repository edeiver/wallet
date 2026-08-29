import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Send from '../screens/Send';
import Receive from '../screens/Receive';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Home'     
        screenOptions={{ headerShown: false }}
>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Send' component={Send}/>
                <Stack.Screen name='Receive' component={Receive}/>
        </Stack.Navigator>
    )
}   

export default AppNavigation
