import axios from 'axios';

export const updateInput = (event) => {
    let details = event;
    return {
        type: 'LEND_UPDATE_INPUT',
        payload: details.target,
      };
  };

export const setTrue = (name) => {
    return {
        type: 'LEND_SET_TRUE',
        payload: name,
      };
  };

export const setFalse = (name) => {
    return {
        type: 'LEND_SET_FALSE',
        payload: name,
      };
  };

export const setValue = (details) => {
    return {
        type: 'LEND_SET_VALUE',
        payload: details,
      };
  };
