import React, { Component } from 'react'

 class Cpn extends Component {
    render() {
        return (
            <div>
                这里是cpn组件
            </div>
        )
    }

    componentWillUnmount(){
        console.log("这里运行了componentWillUnmount方法")
    }
}


export default class App extends Component {
    constructor(){
        super();
        this.state={
            counter:1,
            isShow:true
        }
        console.log("这里运行了constructor方法")
    }
    render() {
        console.log("这里运行了render方法")
        const {counter,isShow}  = this.state;
        return (
            <div>
                这里是app组件
                <h2>{counter}</h2>
                <button onClick={()=>this.add()}>点击加1</button>
                <hr/>
                <button onClick={()=>this.showCpn()}>点击切换</button>
                {isShow&& <Cpn/>}
            </div>
        )
    }


     add() {
        this.setState({
            counter:this.state.counter+=1
        })
    }
    showCpn(){
        this.setState({
            isShow:!this.state.isShow
        })
    }

    componentDidMount(){
        console.log("这里运行了componentDidMount方法")
    }

    componentDidUpdate(){
        console.log("这里运行了componentDidUpdate方法")
    }
}
