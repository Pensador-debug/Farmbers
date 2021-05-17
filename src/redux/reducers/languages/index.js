const initialState = {
    languages: {}
  };
  
  export const languages = (state = initialState, action) => {
    switch (action.type) {
      case 'LANGUAGES': {
        // console.log(action.payload)
        return { ...state, languages: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default languages;