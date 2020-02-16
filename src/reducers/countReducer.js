// eslint-disable-next-line no-unused-vars
import {INCREMENT, DECREMENT} from '../Constant/Constant.js';
import {INITIAL_STATE} from '../Constant/InitialState.js';
const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload - 1,
      };
    default:
      return state;
  }
};
export default countReducer;
