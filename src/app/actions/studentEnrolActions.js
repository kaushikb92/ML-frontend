import axios from 'axios';

export const updateInput = (event) => {
  return {
      type: 'UPDATE_INPUT',
      payload: event.target,
    };
};

export const enrollStudent = (details) => {

  return dispatch => {
          dispatch({
            type: 'ENROLL_STUDENT',
            payload: new Promise((resolve, reject) => {
              resolve(axios({
                method: 'POST',
                url: 'http://localhost:3000/student',
                data: details,
              })
            );
            }),
          });
        };
};
