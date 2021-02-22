import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, globalStyles } from '../styles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';


const Card = ({ amount, description, type, title, date}) => {
    return (
        <View style={[styles.card]}>
           <View style={[ globalStyles.row, globalStyles.spaceBetween]}>
            <View style={[ globalStyles.main, globalStyles.row, globalStyles.alignItemsCenter]}>
                
                {
                    type==='send' &&
                    <View style={styles.cardIcon}>
                        <FontAwesome name="send-o" size={20} color={COLORS.mainBlack} />
                    </View>

                }
                {
                    type==='withdraw' && 
                    <View style={styles.cardIcon}>
                        <MaterialCommunityIcons name="cash-refund" size={20} color={COLORS.mainBlack} />
                    </View>
                }
                <View>
                <Text style={styles.cardText}>enviaste </Text>
                <Text style={styles.cardSubtitle}>11-12-11 </Text>
                </View>
            </View>
            <View/>
            <Text>Balance</Text>
           </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginVertical: 10
    },
    cardBody:{
        padding: 15,
    },
    cardText: {
        marginHorizontal: 10,
        ...globalStyles.robotoMedium,
        color: COLORS.mainBlack

    },
    cardSubtitle: {
        marginHorizontal: 10,
        ...globalStyles.robotoLight,
        fontSize: 12,
        color: COLORS.mainBlack
    },
    cardIcon: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        padding:10
    }
})
