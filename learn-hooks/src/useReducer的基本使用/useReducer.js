import React, { useReducer } from 'react'


function reduce(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, count: state.count + 1 };

    case "red":
      return { ...state, count: state.count - 1 };

    default:
      return state
  }
}

export default function UseReducer() {
  const [state,dispatch] =useReducer(reduce,{count:0})
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>dispatch({type:"add"})}>+1</button>
      <button onClick={()=>dispatch({type:"red"})}>-1</button>
    </div>
  )
}
