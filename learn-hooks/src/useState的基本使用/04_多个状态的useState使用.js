import React, { useState } from 'react'

export default function Counter3() {
  /**
   * useState 本身是一个函数，React包中的（需要传入一个默认值，否则state会返回一个undefined）
   * 然后返回一个数组；数组第一项是state,
   * 数组第二项是setState
   */
  const [count, setCount] = useState(0);

  const [age, setAge] = useState(18);

  const [names, setnames] = useState(["李银河","张大炮","曹大宝"]);

  return (
    <div>
      <div>
        <h2>当前计数：{count}</h2>
        <h2>我的年龄:{age}</h2>
        <ul>
          {
            names.map(item=>(
              <li key={item}>{item}</li>
            ))
          }
        </ul>
        <hr />
        <button onClick={() => setCount(count + 1)}>计数+1</button>
        <button onClick={() => setAge(age + 1)}>年龄+1</button>
        <button onClick={() => setnames([...names,"张三"])}>新增名字</button>
      </div>
    </div>
  )
}
