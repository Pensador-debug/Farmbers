const initialState = {
    home:[]
  };
  
  export const home = (state = initialState, action) => {
    switch (action.type) {
      case 'BESTCROPS': {
        // console.log(action.payload)
        return { ...state, home: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default home;