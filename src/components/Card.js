import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, globalStyles } from '../styles'
import { Feather } from '@expo/vector-icons'

const ICONS = {
    send: { name: 'arrow-up-right', bg: COLORS.expenseBg, color: COLORS.expense },
    receive: { name: 'arrow-down-left', bg: COLORS.incomeBg, color: COLORS.income },
    withdraw: { name: 'arrow-down-circle', bg: COLORS.expenseBg, color: COLORS.expense },
}

const Card = ({ amount, title, date, type }) => {
    const icon = ICONS[type] ?? ICONS.send
    const isIncome = type === 'receive'

    return (
        <View style={[styles.card, globalStyles.glassCard, globalStyles.row, globalStyles.spaceBetween]}>
            <View style={[globalStyles.row, globalStyles.alignItemsCenter]}>
                <View style={[styles.cardIcon, { backgroundColor: icon.bg }]}>
                    <Feather name={icon.name} size={18} color={icon.color} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={styles.cardText}>{title}</Text>
                    <Text style={styles.cardSubtitle}>{date}</Text>
                </View>
            </View>
            <Text style={[styles.cardText, { color: isIncome ? COLORS.income : COLORS.textPrimary }]}>
                {isIncome ? '+' : '-'}${Math.abs(amount).toFixed(2)}
            </Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        padding: 12,
    },
    cardText: {
        ...globalStyles.robotoMedium,
        color: COLORS.textPrimary,
        fontSize: 13.5,
    },
    cardSubtitle: {
        ...globalStyles.robotoLight,
        fontSize: 11.5,
        color: COLORS.textMuted,
        marginTop: 2,
    },
    cardIcon: {
        borderRadius: 19,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
})