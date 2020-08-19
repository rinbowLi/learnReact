import React, { useRef, forwardRef } from 'react'

const MyInput = forwardRef((props, ref) => {
  return <div>
    <input type="text" ref={ref} />
  </div>
})

export default function ForwardRefDemo() {
  const inputRef = useRef()
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
