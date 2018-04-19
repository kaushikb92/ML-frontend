export const updateInput = (event) => {
    let details = event;
    return {
        type: 'REQT_UPDATE_INPUT',
        payload: details.target,
      };
  };

export const setTrue = (name) => {
    return {
        type: 'REQT_SET_TRUE',
        payload: name,
      };
  };

export const setFalse = (name) => {
    return {
        type: 'REQT_SET_FALSE',
        payload: name,
      };
  };

export const setValue = (details) => {
    return {
        type: 'REQT_SET_VALUE',
        payload: details,
      };
  };
