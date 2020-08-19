import React, { useState, useMemo, memo } from 'react'

const MyInfo =memo(function (props) {
  console.log("MyInfo重新渲染")
  return <div>{props.info.name}-{props.info.age}</div>
}) 

export default function UseMemoDemo2() {
  console.log("UseMemoDemo1重新渲染")
  const info = { name: "why", age: 18 };
  const [show, setShow] = useState(true);
  return (
    <div>
      <MyInfo info={info} />
      <button onClick={() => setShow(!show)}>显示隐藏</button>
    </div>
  )
}
