import React, { useState, useCallback, memo } from 'react'


const MyButton = memo((props) => {
  console.log(`button ${props.title}渲染啦`)
  return (<div>
    <button onClick={props.add}>+1</button>
  </div>)
});
/**
 * useCallback的使用场景：
 * 将一个组件的函数传递给子组件进行回调的时候，使用useCallback对函数进行处理
 */

export default function UseCallbackDemo2() {

  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

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
      <MyButton title="add1" add={add1} />
      <MyButton title="add2" add={add2} />
      <button onClick={() => setIsShow(!isShow)}>显示隐藏</button>
    </div>
  )
}
