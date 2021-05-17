const initialState = {
    notification:[]
  };
  
  export const notification = (state = initialState, action) => {
    switch (action.type) {
      case 'NOTIFICATION': {
        // console.log(action.payload)
        return { ...state, notification: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default notification;