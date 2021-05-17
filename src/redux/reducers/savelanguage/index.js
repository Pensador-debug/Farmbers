const initialState = {
    savelanguage: {}
  };
  
  export const savelanguage = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVELANGUAGE': {
        // console.log(action.payload)
        return { ...state,saveprofile:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default savelanguage;