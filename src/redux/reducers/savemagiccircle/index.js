const initialState = {
    savemagiccircle: {}
  };
  
  export const savemagiccircle = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVEMAGICCIRCLE': {
        // console.log(action.payload)
        return { ...state,savemagiccircle:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default savemagiccircle;