import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, globalStyles } from '../styles'

const LoginForm = () => {
    const [phone, setPhone] = useState('')
    const [password, setPasswprd] = useState('')
    return (
        <>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                value={phone}
                onChangeText={(text) => {setPhone(text)}}
                placeholder='3058618336'
                style={[globalStyles.input]}
            />
            <TextInput
                value={password}
                onChangeText={(text) => {setPhone(text)}}
                placeholder='**********'
                style={[globalStyles.input]}
            />
            <TouchableOpacity onPress={() => console.log('ok')} style={[globalStyles.button, styles.btnWidth ]}>
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
      //width: '100%'
  }
})
