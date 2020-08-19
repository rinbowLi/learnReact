import React, { useEffect } from 'react'

function Profile(props) {
  // useEffect(() => {
  //   console.log("Profile组件重建啦");
  //   return () => {
  //     console.log("Profile组件销毁啦")
  //   }
  // })
  useLoggingLife("Profile")
  return <div>Profile组件</div>
}

function Home(props) {
  // useEffect(() => {
  //   console.log("Home组件重建啦");
  //   return () => {
  //     console.log("Home组件销毁啦")
  //   }
  // })
  useLoggingLife("Home")
  return <div>Home组件</div>
}

export default function CustomHook() {
  // useEffect(() => {
  //   console.log("CustomHook组件重建啦");
  //   return () => {
  //     console.log("CustomHook组件销毁啦")
  //   }
  // })
  useLoggingLife("CustomHook")

  return (
    <div>
      <Home />
      <Profile />
     CustomHook组件
    </div>
  )
}


//自定义hook必须以use开头，否则会报错，因为违反了hook使用规则
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件重建啦`);
    return () => {
      console.log(`${name}组件销毁啦`)
    }
  },[])
}
