import * as initialStates from '../common/InitialStates';

const myReqtReducer = (state = initialStates.RequestsData, action) => {
  switch (action.type) {
    case 'REQT_UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;
    case 'REQT_SET_TRUE':
      state = {
        ...state,
        [action.payload]: true,
      };
      break;
    case 'REQT_SET_FALSE':
      state = {
        ...state,
        [action.payload]: false,
      };
      break;
    case 'REQT_SET_VALUE':
      state = {
        ...state,
        [action.payload.setFor]: action.payload.setVal,
      };
      break;
  };
  return state;
};

export default myReqtReducer;
