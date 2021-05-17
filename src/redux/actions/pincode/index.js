import axios from 'axios';
import urlObj from '../../url';
export const pincode = (state) => {
  return async (dispatch, getState) => {

    url = urlObj.pincode_url;
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    await axios
      .get(url, headers1)
      .then((response) => {
        dispatch({
          type: 'PINCODE',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};