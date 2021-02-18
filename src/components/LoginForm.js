import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { COLORS, globalStyles } from '../styles'
import {  Login, getAccesToken }  from '../api'
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage'


const LoginForm = () => {
    const [phone, setPhone] = useState('')
    const [password, setPasswprd] = useState('')
    const { signIn } = useContext(AuthContext)
    const login = async () => {
        const response = await Login(phone,password)
        //console.log('login: ', response);
        if (response.access && response.refresh && response) {
            const currentDateTime =  moment().format('YYYY-MM-DD hh:mm:ss a')
            await AsyncStorage.setItem('dateTimeSignIn', currentDateTime)
            signIn(response.access, response.refresh)
        } else {
            Alert.alert('Error')
        }
    }

    return (
        <>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                value={phone}
                onChangeText={(text) => {setPhone(text)}}
                placeholder='3058618336'
                style={[globalStyles.input]}
                keyboardType='phone-pad'
                autoCapitalize='none'
            />
            <TextInput
                value={password}
                onChangeText={(text) => {setPasswprd(text)}}
                placeholder='**********'
                style={[globalStyles.input]}
                secureTextEntry={true}
                autoCapitalize='none'
            />
            <TouchableOpacity onPress={() => login()} style={[globalStyles.button, styles.btnWidth ]}>
                <Text style={[globalStyles.buttonTitle]}>enviar</Text>
            </TouchableOpacity>
        </>
    )
}

export default LoginForm

const styles = StyleSheet.create({
  btnWidth: {
      width: '70%'
  },
  loginText: {
      fontSize: 20,
      color: COLORS.mainBlack,
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Roboto-Bold',
      letterSpacing: .4,
      //width: '100%'
  }
})
