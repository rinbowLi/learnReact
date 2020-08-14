import React,{useState,useEffect} from 'react'

export default function HookChangeTitle() {
  const [count, setcount] = useState(0)

  useEffect(()=>{
    document.title = count
  })
  return (
    <div>
        <h2>当前计数：{count}</h2>
        <button onClick={()=>setcount(count+1)}>点击加一</button>
      </div>
  )
}

