const initialState = {
  register: {}
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER': {
      // console.log(action.payload)
      return { ...state,register:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default register;