// eslint-disable-next-line no-unused-vars
import {MESSAGE1, MESSAGE2, MESSAGE} from '../Constant/Constant.js';
import {MSG_INITIAL_STATE} from '../Constant/InitialState.js';
const getMessageReducer = (state = MSG_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        msg: action.msg,
      };
    case MESSAGE1:
      return {
        ...state,
        msg1: action.msg1,
      };
    case MESSAGE2:
      return {
        ...state,
        msg2: action.msg2,
      };
    default:
      return state;
  }
};
export default getMessageReducer;
