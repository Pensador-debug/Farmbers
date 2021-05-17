import axios from 'axios';
import urlObj from '../../url';
export const home = (token) => {
  return async (dispatch, getState) => {

    url = urlObj.best_crops_url;
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
          type: 'BESTCROPS',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};