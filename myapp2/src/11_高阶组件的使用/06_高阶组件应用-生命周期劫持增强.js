import React, { PureComponent } from 'react'

function withRenderTime(WarppedComponent){
    return class extends PureComponent{
        UNSAFE_componentWillMount(){
            this.beginTime =Date.now();
        }

        componentDidMount(){
            this.endTime = Date.now();
            const interval =this.endTime - this.beginTime;
            console.log(`Home渲染时间：${interval}`)
        }
        render(){
            return <WarppedComponent/>
        }
    }
}


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

const TimeHome = withRenderTime(Home);
const TimeAbout = withRenderTime(About);

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <TimeHome/>
                <TimeAbout/>
            </div>
        )
    }
}
