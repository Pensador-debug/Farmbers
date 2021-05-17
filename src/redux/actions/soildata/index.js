import axios from 'axios';
import urlObj from '../../url';
export const soildata = (state) => {
  return async (dispatch, getState) => {
    url = urlObj.soil_info_url + "?land_id=" + state.land_id ;
    var headers1 = {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    }
    await axios
      .get(url, headers1)
    
      .then((response) => {
        console.log(url,headers1)
          console.log(response.data)
        dispatch({
          type: 'SOIL',
          payload: response.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};