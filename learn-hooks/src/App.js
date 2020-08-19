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
import UseCallbackDemo1 from './useCallback的基本使用/01_useCallback不能进行的性能优化'
import UseCallbackDemo2 from './useCallback的基本使用/02_useCallback的性能优化'
import UseMemoDemo1 from './useMemo的基本使用/useMemo的使用1'
import UseMemoDemo2 from './useMemo的基本使用/useMemo的使用2'
import UseRefDemo1 from './useRef的基本使用/useRef的基本使用'
import UseRefDemo2 from './useRef的基本使用/useRef引用其他数据'
import ForwardRefDemo from './useImperativeHandle的基本使用/forwardRef的基本使用'
import UseImperativeHandleDemo from './useImperativeHandle的基本使用/useImperativeHandle的基本使用'
import UseEffectDemo from './useLayoutEffect的基本使用/useEffect的基本使用'
import UseLayoutEffectDemo from './useLayoutEffect的基本使用/useLayoutEffect的基本使用'
import CustomHook from './自定义hook/认识自定义hook'
import ContextShareDemo from './自定义hook/自定义hook的练习'


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

        {/* <UseReducer/> */}
        {/* <UseCallbackDemo1/> */}
        {/* <UseCallbackDemo2/> */}

        {/* <UseMemoDemo1/> */}
        {/* <UseMemoDemo2/> */}

        {/* <UseRefDemo1/> */}
        {/* <UseRefDemo2 /> */}

        {/* <ForwardRefDemo/> */}
        {/* <UseImperativeHandleDemo /> */}

        {/* <UseEffectDemo/> */}
        {/* <UseLayoutEffectDemo/> */}


        {/* {show && <CustomHook />}
        <button onClick={() => this.setState({ show: !show })}>点击切换</button> */}

        <UserContext.Provider value={{name:"why",age:18}}>
          <ThemeContext.Provider value={{color:"red",fontSize:"20px"}}>
            <ContextShareDemo />
          </ThemeContext.Provider>
        </UserContext.Provider>

      </div>
    )
  }
}
