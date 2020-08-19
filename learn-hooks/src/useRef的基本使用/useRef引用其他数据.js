import React, { useRef, useState, useEffect } from 'react'

export default function UseRefDemo2() {
  const [count, setCount] = useState(0);

  //首先useRef保存的值在一次生命周期中是不会改变的；
  const countRef = useRef(count);


  //useEffect在页面渲染完之后保存当前状态的count值，下一次渲染的时候就会把这次的值渲染到上一次的count值的后面，从而达到记录上一次值的效果
  useEffect(() => {
    countRef.current = count;
  }, [count])

  return (
    <div>
      {/* <h2>countRef的值是{countRef.current}</h2>
      <h2>count的值是{count}</h2> */}
      <h2>上一次count的值是：{countRef.current}</h2>
      <h2>现在的count的值是：{count}</h2>
      <button onClick={() => setCount(count + 5)}>+5</button>
    </div>
  )
}
