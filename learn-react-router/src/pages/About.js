import React, { PureComponent } from 'react'

import { NavLink, Route } from 'react-router-dom'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <NavLink to="/about">关于我们</NavLink>
        <NavLink to="/about/clture">企业文化</NavLink>
        <NavLink to="/about/aboutus">关乎我们</NavLink>
        <Route exact path="/about" component={Abouta}/>
        <Route path="/about/clture" component={Clture}/>
        <Route path="/about/aboutus" component={Aboutus}/>
      </div>
    )
  }
}


class Clture extends PureComponent {
  render() {
    return (
      <div>
        企业文化
      </div>
    )
  }
}


 class Aboutus extends PureComponent {
  render() {
    return (
      <div>
        关乎我们
      </div>
    )
  }
}

class Abouta extends PureComponent {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}
