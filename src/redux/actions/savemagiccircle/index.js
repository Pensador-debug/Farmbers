import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const savemagiccircle = (state) => {
  return async (dispatch, getState) => {
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }

    var url = urlObj.save_magic_circle_url
    console.log(url,headers1)

    var data = new FormData;
    
    data.append('selectedCircle',state.selectedCircle)
    
    console.log(data)
 
    await axios
      .post(url,data,  headers1)
      .then(async (response) => {
        console.log(response.data.data)

        dispatch({
          type: 'SAVEMAGICCIRCLE',
          payload: response.data.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};