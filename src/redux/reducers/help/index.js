const initialState = {
    help: {}
  };
  
  export const help = (state = initialState, action) => {
    switch (action.type) {
      case 'HELP': {
        // console.log(action.payload)
        return { ...state,help:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default help;