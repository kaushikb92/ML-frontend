import * as initialStates from '../common/InitialStates';

const txReducer = (state = initialStates.TxData, action) => {
  switch (action.type) {
    case 'TX_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;
    case 'TX_SET_TRUE':
      state = {
        ...state,
        [action.payload]: true,
      };
      break;
    case 'TX_SET_FALSE':
      state = {
        ...state,
        [action.payload]: false,
      };
      break;
    case 'TX_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      break;

    case 'TX_ALTER_BOOLEAN':
      state = {
        ...state,
        showLoansTransactions: !state.showLoansTransactions,
      };
      break;

  };
  return state;
};

export default txReducer;
