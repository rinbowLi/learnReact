import React, { useState, useEffect } from 'react'

export default function UseEffectDemo() {

  const [count, setCount] = useState(0);

  useEffect(() => {
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
