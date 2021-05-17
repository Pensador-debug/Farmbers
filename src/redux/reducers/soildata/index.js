const initialState = {
    soildata:[]
  };
  
  export const soildata = (state = initialState, action) => {
    switch (action.type) {
      case 'SOIL': {
        // console.log(action.payload)
        return { ...state, soildata: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default soildata;