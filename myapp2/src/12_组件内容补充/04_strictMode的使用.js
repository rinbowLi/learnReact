import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  UNSAFE_componentWillMount(){
    console.log("这里是home的componentWillMount")
  }
  render() {
    return (<h2 ref="title">Home</h2>)
  }
}

class About extends PureComponent {
  componentWillMount(){
    console.log("这里是about的componentWillMount")
  }
  render() {
    return (<h2 ref="title">About</h2>)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>

        <About />
      </div>
    )
  }
}
