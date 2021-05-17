const initialState = {
    magiccircle:[]
  };
  
  export const magiccircle = (state = initialState, action) => {
    switch (action.type) {
      case 'MAGICCIRCLE': {
        // console.log(action.payload)
        return { ...state, magiccircle: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default magiccircle;