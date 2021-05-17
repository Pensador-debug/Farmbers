const initialState = {
    dashboard:[]
  };
  
  export const dashboard = (state = initialState, action) => {
    switch (action.type) {
      case 'DASHBOARD': {
        // console.log(action.payload)
        return { ...state, dashboard: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  export default dashboard;