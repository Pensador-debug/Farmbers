import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const savelanguage = (state) => {
  return async (dispatch, getState) => {
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }
    var url = urlObj.save_language_url; 
    console.log(url)

    var data = new FormData;
    
    
    data.append('language_id', state.selectedLanguage);
  
    await axios
      .post(url, data, headers1)
      .then(async (response) => {
        console.log(response.data.data)

        dispatch({
          type: 'SAVELANGUAGE',
          payload: response.data.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};