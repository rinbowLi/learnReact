import React, { PureComponent,createRef,forwardRef } from 'react'

class Home extends PureComponent{
    render(){
        return(<h2>Home</h2>)
    }
}

const About =forwardRef(function(props,ref){
    return (<p ref={ref}>About</p>)
})


export default class App extends PureComponent {
    constructor(props){
        super(props);

        this.titleRef =createRef();
        this.homeRef =createRef();
        this.aboutRef =createRef();
    }
    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>Hello World</h2>
                <Home ref={this.homeRef}/>
                <About ref={this.aboutRef}/>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.titleRef.current,this.homeRef.current,this.aboutRef.current)
    }
}
