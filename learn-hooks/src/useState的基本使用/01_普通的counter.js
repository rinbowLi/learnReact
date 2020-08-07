import React, { PureComponent } from 'react'

export default class Counter extends PureComponent {
  state={
    counter:0
  }

  changeCounter(counter){
    this.setState({
      counter:this.state.counter+counter
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <hr/>
        <button onClick={()=>this.changeCounter(1)}>+1</button>
        <button onClick={()=>this.changeCounter(-1)}>-1</button>
      </div>
    )
  }
}
