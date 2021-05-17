const initialState = {
    cropstage:[]
  };
  
  export const cropstage = (state = initialState, action) => {
    switch (action.type) {
      case 'CROPSTAGE': {
        // console.log(action.payload)
        return { ...state, cropstage: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default cropstage;