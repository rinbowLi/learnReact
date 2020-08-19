import React, { useState, useLayoutEffect } from 'react'

export default function UseLayoutEffectDemo() {

  const [count, setCount] = useState(0);

  //在视图渲染完毕前执行，会阻塞渲染进程
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 100)
    }
  }, [count])

  return (
    <div>
      <h2>count现在的值是：{count}</h2>
      <button onClick={() => setCount(0)}>改变count</button>
    </div>
  )
}
