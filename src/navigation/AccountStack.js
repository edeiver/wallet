import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AccountStack = () => {
    return(
        <Stack.Navigator initialRouteName='Login' headerMode='none'>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    )
}

export default AccountStack
