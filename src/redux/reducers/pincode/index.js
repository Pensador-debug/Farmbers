const initialState = {
    pincode: {}
  };
  
  export const pincode = (state = initialState, action) => {
    switch (action.type) {
      case 'PINCODE': {
        // console.log(action.payload)
        return { ...state, pincode: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default pincode;