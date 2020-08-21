import React from 'react'
import useScrollTop from '../hooks/scroll-top-hook'

export default function ScrollTopHook() {
  const scrollY = useScrollTop();

  return (
    <div style={{ paddingTop: "1000px" }}>
      <h2 style={{ position: "fixed", left: 0, top: 0 }}>    ScrollTopHook现在的scrollY是：{scrollY}</h2>
    </div>
  )
}
