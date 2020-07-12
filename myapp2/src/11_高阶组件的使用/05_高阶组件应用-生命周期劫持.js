import React, { PureComponent } from 'react'

class Home extends PureComponent{
    componentWillMount(){
        console.time("home")
    }
    render(){
        return <h2>Home</h2>
    }

    componentDidMount(){
        console.timeEnd("home")
    }
}

class About extends PureComponent{
    componentWillMount(){
        console.time("about")
    }
    render(){
        return <h2>About</h2>
    }

    componentDidMount(){
        console.timeEnd("about") 
    }
}

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}
