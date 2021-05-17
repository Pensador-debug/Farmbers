const initialState = {
    resetpin: {}
  };
  
  export const resetpin = (state = initialState, action) => {
    switch (action.type) {
      case 'RESETPIN': {
        // console.log(action.payload)
        return { ...state,resetpin:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default resetpin;