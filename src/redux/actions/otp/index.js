import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const otp = (state) => {
  return async (dispatch, getState) => {

    var url = urlObj.otp_url + "?mobile=" + state.mobile + "&otp=" + state.otp + "&pin=" + state.pin + "&confirm_pin=" + state.confirm_pin + "&name=" + state.name + "&email=" + state.email;
    console.log(url)
    await axios
      .post(url)
      .then(async (response) => {
        console.log(response.data.data)
        await AsyncStorage.setItem('mobile', state.mobile);
        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
          type: 'OTP',
          payload: response.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};