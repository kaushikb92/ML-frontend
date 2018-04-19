import * as initialStates from '../common/InitialStates';

const studentReducer = (state = initialStates.studentEnroll, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      state = {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      break;
    case 'ENROLL_STUDENT_FULFILLED':
      state = {
        ...state,
        pending: false,
      };
      break;
    case 'ENROLL_STUDENT_REJECTED':
      state = {
        ...state,
        pending: false,
      };
      break;
    case 'ENROLL_STUDENT_PENDING':
      state = {
        ...state,
        pending: true,
      };
      break;

  };
  return state;
};

export default studentReducer;
