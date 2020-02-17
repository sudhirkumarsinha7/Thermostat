// eslint-disable-next-line no-unused-vars
import {INCREMENT, DECREMENT, MESSAGE} from '../Constant/Constant.js';
import {INITIAL_STATE} from '../Constant/InitialState.js';
const countReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.count,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.count,
      };
    default:
      return state;
  }
};
export default countReducer;
