import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import moment from 'moment'

const URL = 'http://192.168.1.9:8000/';
//const URL = 'http://127.0.0.1:8000/';


const getAuthenticationHeaders = async () => {
    try {
        const access_token = await getAccesToken()
        return {
            Authorization: `Bearer ${access_token}`
        }
    } catch (error) {
       console.log(error); 
    }
}
const getAccesToken = async () => {
    console.log(`getAccesToken`);
    const currentDateTime =  moment().format('YYYY-MM-DD hh:mm:ss a')
    const dateTimeSignIn = await AsyncStorage.getItem('dateTimeSignIn')
    //const remainingTime = currentDateTime.diff(dateTimeSignIn, 'minutes')

    const remainingTime = moment.duration(currentDateTime.diff(dateTimeSignIn));

    console.log('remainingTime: ', remainingTime);
    if (remainingTime >=5) {
        return await getRefreshToken()
    } else {
       return await AsyncStorage.getItem('access_token')
    }
}

const getRefreshToken = async () => {
    try {
        const refresh_token = await AsyncStorage.getItem('refresh_token')
        const response = axios.post(`${URL}refresh/`, {
            refresh: refresh_token
        })
        if (response.data.access) {
            await AsyncStorage.setItem('access_token', response.data.access)
            const currentDateTime =  moment().format('YYYY-MM-DD hh:mm:ss a')
            await AsyncStorage.setItem('dateTimeSignIn', currentDateTime)
        }
    } catch (error) {
        console.log(error);
    }
    

}

export const Login = async (phone, password) => {
    console.log('se envia: ', phone, password);
    try {
        const response = await axios.post(`${URL}token/`, {
            phone,
            password
        })
        await getAccesToken()

        console.log('response ok: ', response.data);
        return response.data
    } catch (e) {
        console.log('Login: ',e);
    }
}