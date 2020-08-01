import React, { PureComponent } from 'react'

import { NavLink, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

export default class About extends PureComponent {

  render() {
    console.log(this.props.route)
    return (
      <div>
        <h2>About</h2>
        <NavLink to="/about">关于我们</NavLink>
        <NavLink to="/about/clture">企业文化</NavLink>
        <NavLink to="/about/aboutus">关乎我们</NavLink>
        {/* <Route exact path="/about" component={Abouta}/>
        <Route path="/about/clture" component={Clture}/>
        <Route path="/about/aboutus" component={Aboutus}/> */}
        {
          renderRoutes(this.props.route.routes)
        }
      </div>
    )
  }
}


export class Clture extends PureComponent {
  render() {
    return (
      <div>
        企业文化
      </div>
    )
  }
}


export class Aboutus extends PureComponent {
  render() {
    return (
      <div>
        关乎我们
      </div>
    )
  }
}

export class Abouta extends PureComponent {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}
