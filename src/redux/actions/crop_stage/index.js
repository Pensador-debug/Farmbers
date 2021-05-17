import axios from 'axios';
import urlObj from '../../url';
export const cropstage = (state) => {
  return async (dispatch, getState) => {
    url = urlObj.crop_stage_url + "?crop_id=" + state.crop_id;
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
          type: 'CROPSTAGE',
          payload: response.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};