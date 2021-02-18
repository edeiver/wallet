import { StyleSheet } from 'react-native'
export const COLORS = {
    mainBlack: '#211f2b',
    mainGray: 'rgba(239, 240, 242, 1.0)'
}

export const globalStyles = StyleSheet.create({
    main: {
        flex: 1
    },
    bgMain: {
        backgroundColor: COLORS.mainGray
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
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
        backgroundColor: COLORS.mainBlack,
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
    input: {
        borderWidth: 1,
        borderColor: COLORS.mainBlack,
        color: COLORS.mainBlack,
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