import React, { PureComponent } from 'react'
import Counter from './useState的基本使用/01_普通的counter'
import Counter2 from './useState的基本使用/02_useState的基本使用'
import Counter3 from './useState的基本使用/03_useState的进阶使用'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Counter/>
        <Counter2/>
        <Counter3/>
      </div>
    )
  }
}
