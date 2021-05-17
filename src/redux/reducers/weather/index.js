const initialState = {
    weather:[]
  };
  
  export const weather = (state = initialState, action) => {
    switch (action.type) {
      case 'WEATHER': {
        // console.log(action.payload)
        return { ...state, weather: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default weather;