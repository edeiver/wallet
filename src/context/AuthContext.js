import React, { useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const AuthContext = createContext()

const Provider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState( async () => {
        try {
            const access_token = await AsyncStorage.getItem('access_token');
            if (access_token) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error);
            return false

        }
    })
    const value = {
        isAuth,
        signIn: async (token, refresh) => {
            try {
                await AsyncStorage.setItem('access_token', token);
                await AsyncStorage.setItem('refresh_token', refresh);
                setIsAuth(true)
            } catch (error) {
                console.log(error);
            }
        },
        signOut: async () => {
            setIsAuth(false);
            await AsyncStorage.getAllKeys()
            .then((keys) => {
                AsyncStorage.multiRemove(keys)
                Alert.alert(
                    'Cerrar sesion',
                    'cerraste tu sesion, recuerda que debes iniciarla para usar algunas funciones',
                    [
                        {
                            text: 'Ok',
                            onPress: () => console.log('ok')
                        }
                    ],
                    { cancelable: false}
                )
            })
            .catch((e) => {
                console.log(e);
            })
        },
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default {
    Provider,
    Consumer: AuthContext.Consumer
};