// eslint-disable-next-line no-unused-vars
import {INCREMENT, DECREMENT, MESSAGE} from '../Constant/Constant.js';
import {MSG_INITIAL_STATE} from '../Constant/InitialState.js';
const getMessageReducer = (state = MSG_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MESSAGE:
      return {
        ...state,
        msg: action.msg,
      };
    default:
      return state;
  }
};
export default getMessageReducer;
