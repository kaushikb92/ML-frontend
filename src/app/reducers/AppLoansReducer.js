import * as initialStates from '../common/InitialStates';

const approvedLoans = (state = initialStates.appLoanData, action) => {
  switch (action.type) {
    case 'APPLOAN_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;
    case 'APPLOAN_SET_TRUE':
      state = {
        ...state,
        [action.payload]: true,
      };
      break;
    case 'APPLOAN_SET_FALSE':
      state = {
        ...state,
        [action.payload]: false,
      };
      break;
    case 'APPLOAN_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      break;
  };
  return state;
};

export default approvedLoans;
