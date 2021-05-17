const initialState = {
    mandi:[]
  };
  
  export const mandi = (state = initialState, action) => {
    switch (action.type) {
      case 'MANDI': {
        // console.log(action.payload)
        return { ...state, mandi: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default mandi;