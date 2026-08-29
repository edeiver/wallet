import { StyleSheet } from 'react-native'
export const COLORS = {

    mainBlack: '#211f2b',
    mainGray: 'rgba(239, 240, 242, 1.0)',

    background: '#0A0A10',

    // text
    textPrimary: '#F2F2F7',
    textSecondary: '#9A9AB4',
    textMuted: '#6E6E88',

    // gradrine (btn, card and CTA)
    accentStart: '#4886FE',
    accentEnd: '#7C44C3',
    accentLink: '#9DABF7',

    // "mesh" (low op)
    meshIndigo: '#4777F0',
    meshViolet: '#A278E4',
    meshBlue: '#007FC0',

    // (income / expense)
    income: '#66DA85',
    incomeBg: 'rgba(76, 184, 106, 0.18)',
    expense: '#FF877F',
    expenseBg: 'rgba(239, 102, 97, 0.16)',

    // (glassmorphism)
    glassBg: 'rgba(255, 255, 255, 0.055)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
}

export const globalStyles = StyleSheet.create({
    main: {
        flex: 1
    },
    bgMain: {
        backgroundColor: COLORS.background
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignItemsCenter: {
        alignItems: 'center',

    },
    row: {
        flexDirection: 'row'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
    safePadding:{
        paddingHorizontal: 20
    },
    safePaddingTop: {
        paddingTop: 20
    },
    button: {
        backgroundColor: COLORS.accentStart,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        marginTop: 15
    },
    buttonTitle:{
        color: COLORS.mainGray,
        fontSize: 15,
        textTransform: 'uppercase',
        fontFamily: 'Roboto-Regular',
        letterSpacing: 1.2
        
    },
      glassCard: {
        backgroundColor: COLORS.glassBg,
        borderWidth: 1,
        borderColor: COLORS.glassBorder,
        borderRadius: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.glassBorder,
        backgroundColor: COLORS.glassBg,
        color: COLORS.textPrimary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '70%',
        borderRadius: 15,
        marginVertical: 10,
        fontSize: 15,
        fontFamily: 'Roboto-Regular',

    },
    roboto:{
        fontFamily: 'Roboto-Regular'
        //fontFamily: 'Roboto'
    },
    robotoBold:{
        //fontFamily: 'Roboto_bold'
        fontFamily: 'Roboto-Bold'
    },
    robotoMedium: {
        //fontFamily: 'Roboto_medium'
        fontFamily: 'Roboto-Medium'

    },
    robotoLight:{
        fontFamily: 'Roboto-Light'
        //fontFamily: 'Roboto_light'
    },
    robotoItalic: {
        //fontFamily: 'Roboto_italic'
        fontFamily: 'Roboto-Italic'
    }
})