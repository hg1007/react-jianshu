import * as constants from './constants'
import axios from 'axios'

const changeLogin=()=>({
    type:constants.CHANGE_LOGIN,
    value:true
})
const changeLogout=()=>({
    type:constants.CHANGE_LOGOUT,
    value:false
})
export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
            if (res.data.success) {
                const data = res.data;
                if(data){
                    dispatch(changeLogin())
                }
            }   
        }).catch({
            // console.log('error')
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogout())
    }
}