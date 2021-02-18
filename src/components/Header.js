import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, globalStyles } from '../styles'

const Header = ({ isHome, onPress}) => {
    return (
        <>
            {
                isHome && 
                <View style={[ styles.homeHeader, globalStyles.row, globalStyles.spaceBetween]}>
                    <Text style={[styles.homeText]}>Home</Text>
                    <Text></Text>
                    <TouchableOpacity style={[ styles.btn]} onPress={() => { onPress ()}}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    homeHeader: {
        padding: 15,
    },
    homeText: {
        fontSize: 20,
        ...globalStyles.robotoMedium,
        letterSpacing: .5
    },
    btn: {
        borderRadius: 200,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: COLORS.mainBlack,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
