import React, { useRef } from 'react'

class Test extends React.Component {
  render() {
    return (<div>
      Test组件
    </div>)
  }
}


//函数式组件不能直接创建ref
function Test2(props){
  return (<div>Test2</div>)
}

// let Test3 =React.forwardRef(function(props){
//   return (<div>Test3</div>)
// }) 

export default function UseRefDemo1() {

  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();
  // const testRef3 = useRef();

  function changeDOM() {
    console.log(titleRef.current)
    console.log(inputRef.current)
    console.log(testRef.current)
    // console.log(testRef3)
    titleRef.current.innerHTML = "Hello World";
    inputRef.current.focus()
  }

  return (
    <div>
      <h2 ref={titleRef}>测试文本</h2>
      <input type="text" ref={inputRef} />
      <Test ref={testRef} />
      <Test2 ref={testRef2} />
      {/* <Test3 ref={testRef3} /> */}
      <button onClick={() => changeDOM()}>点击打印Ref</button>
    </div>
  )
}
