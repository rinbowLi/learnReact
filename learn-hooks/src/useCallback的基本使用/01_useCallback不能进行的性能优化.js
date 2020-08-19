import React, { useState, useCallback } from 'react'

export default function UseCallbackDemo1() {

  const [count, setCount] = useState(0);

  const add1 = () => {
    console.log("执行了add1函数");
    setCount(count + 1)
  }
  //此时每次函数组件被调用的时候，匿名函数都会重新创建，所以不会有任何的性能优化
  const add2 = useCallback(() => {
    console.log("执行了add2函数");
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h2>现在的count是：{count}</h2>
      <button onClick={add1}>+1</button>
      <button onClick={add2}>+1</button>
    </div>
  )
}
