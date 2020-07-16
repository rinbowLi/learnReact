
import { ADD_COUNT, SUB_COUNT } from './const.js'

const initialState = {
  count: 0
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + action.num };
    case SUB_COUNT:
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
}