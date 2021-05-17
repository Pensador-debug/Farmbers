import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const saveland = (state) => {
  return async (dispatch, getState) => {
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }

    var url = urlObj.save_farm_url
    console.log(url,headers1)

    var data = new FormData;
    data.append('latitude',state.latitude)
    data.append('longitude',state.longitude)
    data.append('farm_name',state.farm_name)
    data.append('pincode',state.pincode)
    data.append('magiccircle_id',state.magiccircle_id)
    
    console.log(data)
 
    await axios
      .post(url,data,  headers1)
      .then(async (response) => {
        console.log(response.data.data)

        dispatch({
          type: 'SAVELAND',
          payload: response.data.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};