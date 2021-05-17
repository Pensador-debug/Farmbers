const initialState = {
    forgetpin: {}
  };
  
  export const forgetpin = (state = initialState, action) => {
    switch (action.type) {
      case 'FORGETPIN': {
        // console.log(action.payload)
        return { ...state,forgetpin:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default forgetpin;