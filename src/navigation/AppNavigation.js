import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigation = () => {
    console.log('AppNavigation');
    return (
        <Stack.Navigator initialRouteName='Home' headerMode='none'>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}   

export default AppNavigation
