import {MESSAGE1, MESSAGE2, MESSAGE} from '../Constant/Constant.js';

export function getMessage1(msg) {
  return {
    type: MESSAGE1,
    payload: msg,
  };
}
export function getMessage2(msg) {
  return {
    type: MESSAGE2,
    payload: msg,
  };
}
export function changeMessage(msg) {
  return {
    type: MESSAGE,
    payload: msg,
  };
}
