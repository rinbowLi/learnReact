import React, { PureComponent, createContext } from 'react'
import Counter from './useState的基本使用/01_普通的counter'
import Counter2 from './useState的基本使用/02_useState的基本使用'
import Counter3 from './useState的基本使用/03_useState的进阶使用'
import Counter4 from './useState的基本使用/04_多个状态的useState使用'
import Counter5 from './useState的基本使用/05_复杂状态useState的使用'
import ChangeTitle from './useEffect的基本使用/01_class修改页面title'
import HookChangeTitle from './useEffect的基本使用/02_hook修改页面title'
import HookChangeTitle2 from './useEffect的基本使用/03_hook订阅取消事件'
import Context from './useContext的基本使用/context的使用'
import UseReducer from './useReducer的基本使用/useReducer'


export const UserContext = createContext()
export const ThemeContext = createContext()
export default class App extends PureComponent {
  state = {
    show: true
  }
  render() {
    const { show } = this.state
    return (
      <div>
        {/* <Counter/>
        <Counter2/>
        <Counter3/> */}
        {/* <Counter4/> */}
        {/* <Counter5/> */}
        {/* <ChangeTitle/> */}
        {/* <HookChangeTitle/> */}
        {/* {show&&<HookChangeTitle2/>} */}
        {/* <button onClick={()=>this.setState({show:!show})}>点击切换</button> */}
        {/* useContext
        <UserContext.Provider value={{ name: "why", age: 18 }}>
          <ThemeContext.Provider value={{ color: "blue", fontSize: "15px" }}>
            <Context />
          </ThemeContext.Provider>
        </UserContext.Provider> */}

       <UseReducer/>

      </div>
    )
  }
}
