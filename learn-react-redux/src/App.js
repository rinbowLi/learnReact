import React, { PureComponent } from 'react'

import Home from './views/Home2';
import About from './views/About2'

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
