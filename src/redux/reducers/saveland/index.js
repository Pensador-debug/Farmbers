const initialState = {
    saveland: {}
  };
  
  export const saveland = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVELAND': {
        // console.log(action.payload)
        return { ...state,saveland:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveland;