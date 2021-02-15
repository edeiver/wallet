import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import LoginForm from '../components/LoginForm'
import { globalStyles } from '../styles'

const Login = (props) => {
    return (
        <SafeAreaView style={[ globalStyles.main ]}>
            <View style={[ globalStyles.main, globalStyles.bgMain]}>
                <View style={[ globalStyles.main, globalStyles.center, globalStyles.safePadding]}>
                    <LoginForm/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({})
