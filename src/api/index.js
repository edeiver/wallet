import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import moment from 'moment'

const URL = 'http://192.168.1.6:8000/';
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
const millisecondsToMinutesAndSeconds = async (millis)=> {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return { minutes, seconds}
    //return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const getAccesToken = async () => {
    console.log(`getAccesToken`);
    const currentDateTime =  moment().format('YYYY-MM-DD hh:mm:ss a')
    const dateTimeSignIn = await AsyncStorage.getItem('dateTimeSignIn')
    //const remainingTime = currentDateTime.diff(dateTimeSignIn, 'minutes')
 
    const dateA =  moment(currentDateTime, 'HH:mm:ss')
    const dateB =  moment(dateTimeSignIn, 'HH:mm:ss')
    //console.log(`a`,dateA, dateB);

    const remainingTime = await millisecondsToMinutesAndSeconds(moment(currentDateTime, 'HH:mm:ss').diff(moment(dateTimeSignIn, 'HH:mm:ss')))
    //console.log('remainingTime: ', remainingTime);
    const  {  minutes, seconds } = remainingTime


    if (minutes >=5) {
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
        console.log('response ok: ', response.data);
        return response.data
    } catch (e) {
        console.log('Login: ',e);
    }
}