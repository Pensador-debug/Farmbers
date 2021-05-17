import axios from 'axios';
import urlObj from '../../url';
export const usercrops = (token) => {
  return async (dispatch, getState) => {

    url = urlObj.user_crop_url;
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    await axios
      .get(url, headers1)
      .then((response) => {
          console.log(response.data)
        dispatch({
          type: 'USERCROPS',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};