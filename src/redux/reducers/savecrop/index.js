const initialState = {
    savecrop: {}
  };
  
  export const savecrop = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVECROP': {
        // console.log(action.payload)
        return { ...state,savecrop:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default savecrop;