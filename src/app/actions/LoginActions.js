export const updateInput = (event) => {
    let details = event;
    return {
        type: 'LOGIN_UPDATE_INPUT',
        payload: details.target,
      };
  };

export const resetLoginForm = () => {
    return {
        type: 'RESET_LOGIN_FORM',
        payload: null,
    };
}

export const setValue = (details) => {
    return {
        type: 'LOGIN_SET_VALUE',
        payload: details,
    };
}
