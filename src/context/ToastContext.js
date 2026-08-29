import React, { createContext, useContext, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { COLORS, globalStyles } from '../styles'

const ToastContext = createContext(null)

const ICONS = {
    success: { name: 'check-circle', color: COLORS.income, bg: COLORS.incomeBg },
    error: { name: 'x-circle', color: COLORS.expense, bg: COLORS.expenseBg },
    info: { name: 'info', color: COLORS.accentLink, bg: COLORS.glassBg },
}

export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState(null)
    const translateY = useRef(new Animated.Value(-100)).current
    const opacity = useRef(new Animated.Value(0)).current
    const hideTimer = useRef(null)

    const showToast = (message='', type = 'success', duration = 2500) => {
        if (hideTimer.current) clearTimeout(hideTimer.current)
        setToast({ message, type })

        Animated.parallel([
            Animated.spring(translateY, { toValue: 0, useNativeDriver: true, friction: 8 }),
            Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        ]).start()

        hideTimer.current = setTimeout(() => {
            Animated.parallel([
                Animated.timing(translateY, { toValue: -100, duration: 220, useNativeDriver: true }),
                Animated.timing(opacity, { toValue: 0, duration: 220, useNativeDriver: true }),
            ]).start(() => setToast(null))
        }, duration)
    }

    const icon = toast ? ICONS[toast.type] ?? ICONS.info : ICONS.info

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <Animated.View
                    style={[
                        styles.toast,
                        globalStyles.row,
                        globalStyles.alignItemsCenter,
                        { transform: [{ translateY }], opacity },
                    ]}
                >
                    <View style={[styles.iconCircle, { backgroundColor: icon.bg }]}>
                        <Feather name={icon.name} size={16} color={icon.color} />
                    </View>
                    <Text style={styles.message}>{toast.message}</Text>
                </Animated.View>
            )}
        </ToastContext.Provider>
    )
}

export const useToast = () => useContext(ToastContext)

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        top: 60,
        left: 20,
        right: 20,
        backgroundColor: '#181820',
        borderWidth: 1,
        borderColor: COLORS.glassBorder,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 15,
        gap: 10,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
        zIndex: 999,
    },
    iconCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        ...globalStyles.robotoMedium,
        fontSize: 13.5,
        color: COLORS.textPrimary,
        flex: 1,
    },
})