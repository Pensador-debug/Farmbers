const initialState = {
  otp: {}
};

export const otp = (state = initialState, action) => {
  switch (action.type) {
    case 'OTP': {
      // console.log(action.payload)
      return { ...state,otp:action.payload };
    }
    default: {
      return state;
    }
  }
};
export default otp;