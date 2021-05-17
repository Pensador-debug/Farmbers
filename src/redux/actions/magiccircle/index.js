import axios from 'axios';
import urlObj from '../../url';
export const magiccircle = (state) => {
  return async (dispatch, getState) => {

    var url = urlObj.magic_circle_url + "?latitude=" + state.latitude + "&longitude=" + state.longitude;
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }

    await axios
      .get(url, headers1)
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'MAGICCIRCLE',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};