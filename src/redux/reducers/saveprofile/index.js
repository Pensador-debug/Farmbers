const initialState = {
    saveprofile: {}
  };
  
  export const saveprofile = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVEPROFILE': {
        // console.log(action.payload)
        return { ...state,saveprofile:action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default saveprofile;