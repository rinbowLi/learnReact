import React from "react"
import ReactDom from "react-dom"
import './02_组件通信案例/style.css'

// import Child from './01_组件的定义方式/01_类组件'


// class App extends Component{

//     render(){
//         return(
//         <div>
//             这是根组件
//          <Child message={"哈哈哈哈"}></Child>
//         </div>
//         )
//     }
// }

// import App from "./01_组件的定义方式/02_生命周期函数"
// import App from "./01_组件的定义方式/03_组件化开发"
//  import App from "./01_组件的定义方式/04_父传子通信-类组件"
//  import App from "./01_组件的定义方式/05_父传子通信-函数组件"
//  import App from "./01_组件的定义方式/06_父传子通信-属性验证"
//  import App from "./01_组件的定义方式/07_父子组件的通信-传递函数"
//  import App from "./02_组件通信案例/02_组件通信案例"
// import  App from './03_跨组件的通信/01_跨组件通信-props'
// import  App from './03_跨组件的通信/02_跨组件通信-context'
// import  App from './03_跨组件的通信/03_跨组件通信-context函数'
// import App from './04_setState的使用/01-为什么使用setState'
// import App from './04_setState的使用/02_setState是异步更新的'
// import App from './04_setState的使用/03_setState是同步更新的'
// import App from './04_setState的使用/04_setState数据的合并'
// import App from './04_setState的使用/05_setState本身的合并'
// import App from './11_高阶组件的使用/01_高阶组件的定义方式'
// import App from './11_高阶组件的使用/03_高阶组件应用-增强props'
// import App from './11_高阶组件的使用/04_高阶组件应用-登录鉴权'
// import App from './11_高阶组件的使用/05_高阶组件应用-生命周期劫持'
// import App from './11_高阶组件的使用/06_高阶组件应用-生命周期劫持增强'
import App from './12_组件内容补充/01_ref的转发'



ReactDom.render(<App name="why"/>,document.getElementById("root"))