import * as initialStates from '../common/InitialStates';

const lenderReducer = (state = initialStates.LenderData, action) => {
  switch (action.type) {
    case 'LEND_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;
    case 'LEND_SET_TRUE':
      state = {
        ...state,
        [action.payload]: true,
      };
      break;
    case 'LEND_SET_FALSE':
      state = {
        ...state,
        [action.payload]: false,
      };
      break;
    case 'LEND_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      break;
  };
  return state;
};

export default lenderReducer;
