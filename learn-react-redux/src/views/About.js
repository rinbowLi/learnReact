import React, { PureComponent } from 'react'
import store from '../store'

import { addAction } from '../store/actions'

export default class About extends PureComponent {
  state = {
    count: store.getState().count
  }

  add(num) {
    store.dispatch(addAction(num))
  }


  componentDidMount() {
    this.unsubcribe = store.subscribe(() => {
      this.setState({
        count: store.getState().count
      })
    })
  }

  componentWillUnmount() {
    this.unsubcribe()
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>当前计数：{this.state.count}</h3>
        <button onClick={() => this.add(1)}>+1</button>
        <button onClick={() => this.add(5)}>+5</button>
      </div>
    )
  }
}
