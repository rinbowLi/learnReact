import React, { useState } from 'react'

export default function Counter2() {
  /**
   * useState 本身是一个函数，React包中的（需要传入一个默认值，否则state会返回一个undefined）
   * 然后返回一个数组；数组第一项是state,
   * 数组第二项是setState
   */
  let stateArr = useState(0);
  let state = stateArr[0];
  let setState = stateArr[1];
  return (
    <div>
      <div>
        <h2>{state}</h2>
        <hr />
        <button onClick={() => setState(state + 1)}>+1</button>
        <button onClick={() => setState(state - 1)}>-1</button>
      </div>
    </div>
  )
}
