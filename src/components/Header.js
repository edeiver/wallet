import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, globalStyles } from '../styles'
import { BlurView } from 'expo-blur'

const Header = ({ isHome=true, name = 'Edeiver Barranco E', initials = 'E.B' }) => {
    return (
        <>
            {
                isHome &&
                <View style={[styles.homeHeader, globalStyles.row, globalStyles.spaceBetween, globalStyles.alignItemsCenter]}>
                    <View>
                        <Text style={styles.greeting}>Buenas tardes</Text>
                        <Text style={styles.name}>{name}</Text>
                    </View>
                    <BlurView intensity={40} tint="dark" style={styles.avatar}>
                        <Text style={styles.avatarText}>{initials}</Text>
                    </BlurView>
                </View>
            }
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    homeHeader: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 8,
    },
    greeting: {
        ...globalStyles.roboto,
        fontSize: 13,
        color: COLORS.textSecondary,
    },
    name: {
        ...globalStyles.robotoMedium,
        fontSize: 18,
        color: COLORS.textPrimary,
        marginTop: 2,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS.glassBorder,
    },
    avatarText: {
        ...globalStyles.robotoMedium,
        fontSize: 14,
        color: COLORS.textPrimary,
    },
})