import React, { PureComponent } from 'react'

import Home from './views/Home4';
import About from './views/About3'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Home/>
        <About/>
      </div>
    )
  }
}
