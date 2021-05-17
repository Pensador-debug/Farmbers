import axios from 'axios';
import urlObj from '../../url';
export const notification = (token) => {
  return async (dispatch, getState) => {

    url = urlObj.notification_url;
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
          type: 'NOTIFICATION',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};