import axios from 'axios';
import urlObj from '../../url';
export const languages = (token) => {
  return async (dispatch, getState) => {

     var url = urlObj.languages_url;
    // var headers1 = {
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }
    await axios
      .get(url)
      .then((response) => {
        

        dispatch({
          type: 'LANGUAGES',
          payload: response.data.data

        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};