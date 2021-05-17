import axios from 'axios';
import urlObj from '../../url';
import AsyncStorage from '@react-native-community/async-storage';
export const saveprofile = (state) => {
  return async (dispatch, getState) => {
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }
    var url = urlObj.save_profile_url + "?city=" + state.city + "&state=" + state.state + "&bio=" + state.bio + "&position=" + state.position + "&pincode=" + state.pincode;
    console.log(url)

    var data = new FormData;
    data.append('avatarSource',state.profilepic)
    
    data.append('profession', state.profession);
    data.append('address', state.address);
    data.append('locality', state.locality);
    await axios
      .post(url, data, headers1)
      .then(async (response) => {
        console.log(response.data.data)

        dispatch({
          type: 'SAVEPROFILE',
          payload: response.data.data

        });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};