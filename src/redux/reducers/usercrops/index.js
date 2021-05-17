const initialState = {
    usercrops:[]
  };
  
  export const usercrops = (state = initialState, action) => {
    switch (action.type) {
      case 'USERCROPS': {
        // console.log(action.payload)
        return { ...state, usercrops: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default usercrops;