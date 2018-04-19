export const updateInput = (event) => {
    let details = event;
    return {
        type: 'APPLOAN_UPDATE_INPUT',
        payload: details.target,
      };
  };

export const setTrue = (name) => {
    return {
        type: 'APPLOAN_SET_TRUE',
        payload: name,
      };
  };

export const setFalse = (name) => {
    return {
        type: 'APPLOAN_SET_FALSE',
        payload: name,
      };
  };

export const setValue = (details) => {
    return {
        type: 'APPLOAN_SET_VALUE',
        payload: details,
      };
  };
