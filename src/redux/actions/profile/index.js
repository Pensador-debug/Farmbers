import axios from 'axios';
import urlObj from '../../url';
export const profile = (token) => {
  return async (dispatch, getState) => {

    url = urlObj.profile_url;
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    await axios
      .get(url, headers1)
      .then((response) => {
        dispatch({
          type: 'PROFILE',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};