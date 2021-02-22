import React, { useContext } from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
import { AuthContext } from '../context/AuthContext'
import { globalStyles } from '../styles'

const Home = ({ navigation }) => {
    const { signOut }=useContext(AuthContext)
    return (
        <SafeAreaView style={[globalStyles.main, globalStyles.bgMain]}>
            <View style={[globalStyles.main, globalStyles.safePadding ]}>
                <View style={[ globalStyles.safePaddingTop]}>
                    <Header isHome onPress={signOut}/>
                </View>
                <Card type='send'/>
                <Card type='send'/>
                <Card type='send'/>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
