import React,{useState,useEffect} from 'react'

export default function HookChangeTitle2() {
  const [count, setcount] = useState(0)


  //useEffect第一个参数相当于componentDidMount，第一个函数的返回值（也是一个函数）相当于componentDidUpdate；第二个参数是个只读数组，包含依赖的数据，只有数据发生了改变的时候才会回调这个useEffect，空数组的时候就只会在创建的时候执行一次，后面就不会执行了
  useEffect(()=>{
    document.title = count;
    console.log("订阅了事件");
    return ()=>{
      console.log("取消订阅了事件")
    }
  },[])
  return (
    <div>
        <h2>当前计数：{count}</h2>
        <button onClick={()=>setcount(count+1)}>点击加一</button>
      </div>
  )
}

