import axios from 'axios';
import urlObj from '../../url';
export const weather = (token) => {
  return async (dispatch, getState) => {

    url = urlObj.weather_info_url;
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
          type: 'WEATHER',
          payload: response.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};