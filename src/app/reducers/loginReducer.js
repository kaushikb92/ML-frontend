import * as initialStates from '../common/InitialStates';

const loginReducer = (state = initialStates.Login, action) => {
  switch (action.type) {
    case 'LOGIN_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;

    case 'LOGIN_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      break;

    case 'RESET_LOGIN_FORM':
      state = initialStates.Login;
      break;
  };
  return state;
};

export default loginReducer;
