export const updateInput = (event) => {
    let details = event;
    return {
        type: 'TX_UPDATE_INPUT',
        payload: details.target,
      };
  };

export const setTrue = (name) => {
    return {
        type: 'TX_SET_TRUE',
        payload: name,
      };
  };

export const setFalse = (name) => {
    return {
        type: 'TX_SET_FALSE',
        payload: name,
      };
  };

export const setValue = (details) => {
    return {
        type: 'TX_SET_VALUE',
        payload: details,
      };
  };

export const alterBoolean = () => {
    return {
        type: 'TX_ALTER_BOOLEAN',
        payload: null,
      };
  };

