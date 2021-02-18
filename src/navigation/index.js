import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AccountStack from './AccountStack';
import { AuthContext } from '../context/AuthContext';
import AppNavigation from './AppNavigation';


const Navigation = () => {
    const { isAuth } = useContext(AuthContext)
    console.log('auth from nav', isAuth);
    
    return (
        <NavigationContainer>
            {
                !isAuth ? <AccountStack/> : <AppNavigation/>
            }
        </NavigationContainer>
    )
}
export default Navigation