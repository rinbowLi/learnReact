import React, { useState, useMemo } from 'react'

function calcNum(count) {
  console.log("calcNum重新运行")
  let total = 0;
  for (let i = count; i > 0; i--) {
    total += i
  }
  return total;
}

export default function UseMemoDemo1() {
  console.log("UseMemoDemo1重新渲染")
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const total = useMemo(()=>{
    return calcNum(count);
  },[count]) 
  return (
    <div>
      <h2>现在的数字累加为：{total}</h2>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setShow(!show)}>显示隐藏</button>
    </div>
  )
}
