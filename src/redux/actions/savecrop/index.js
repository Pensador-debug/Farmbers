import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const savecrop = (state) => {
  return async (dispatch, getState) => {
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }

    var url = urlObj.save_crop_url
    console.log(url, headers1)

    var data = new FormData;
    data.append('land_id', state.land_id)
    data.append('crop_id', state.crop_id)

    await axios
      .post(url, data, headers1)
      .then(async (response) => {
        console.log(response.data.data, 'shashank34')

        dispatch({
          type: 'SAVECROP',
          payload: response.data.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};