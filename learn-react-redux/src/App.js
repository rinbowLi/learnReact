import React, { PureComponent } from 'react'

import Home from './views/Home';
import About from './views/About'

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
