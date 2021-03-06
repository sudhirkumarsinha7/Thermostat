import {INCREMENT, DECREMENT, MESSAGE} from '../Constant/Constant.js';

export function inCrementCount(value) {
  return {
    type: INCREMENT,
    payload: value,
  };
}
export function deCrementCount(value) {
  return {
    type: DECREMENT,
    payload: value,
  };
}
export function changeMessage(msg) {
  return {
    type: MESSAGE,
    payload: msg,
  };
}
