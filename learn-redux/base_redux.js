const redux = require("redux");


const initialState = {
  count: 0
}

//reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ("ADD_ONE"):
      return { ...state, count: state.count + 1 };
    case ("SUB_ONE"):
      return { ...state, count: state.count - 1 };
    case ("ADD_COUNT"):
      return { ...state, count: state.count + action.number };
    case ("SUB_COUNT"):
      return { ...state, count: state.count - action.number };
    default:
      return state;
  }
}


//store
const store = redux.createStore(reducer);

//订阅Stroe的修改

store.subscribe(() => {
  console.log(`当前的count是：${store.getState().count}`)
})


//actions
const action1 = { type: "ADD_ONE" };
const action2 = { type: "SUB_ONE" };
const action3 = { type: "ADD_COUNT", number: 5 };
const action4 = { type: "SUB_COUNT", number: 10 };


//派发
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
