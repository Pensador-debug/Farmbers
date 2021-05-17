import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const register = (state) => {
  return async (dispatch, getState) => {
    
     var url= urlObj.register_url+"?mobile="+state.mobile;
    console.log(url)
    await axios
      .post(url)
      .then(async (response) => {
        console.log(response.data)
       
        dispatch({
          type: 'REGISTER',
          payload: response.data
          
        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};