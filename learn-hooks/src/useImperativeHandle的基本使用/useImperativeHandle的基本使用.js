import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef.current])
  return <div>
    <input type="text" ref={inputRef} />
  </div>
})

export default function UseImperativeHandleDemo() {
  const inputRef = useRef()
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
