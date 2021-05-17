import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const resetpin = (state) => {
  return async (dispatch, getState) => {
    
     var url= urlObj.resetpin_url+"?mobile="+state.mobile+"&otp="+state.otp+"&pin="+state.pin+"&confirm_pin="+state.confirm_pin;
    console.log(url)
    await axios
      .post(url)
      .then(async (response) => {
        console.log(response.data)
       
        dispatch({
          type: 'RESETPIN',
          payload: response.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};