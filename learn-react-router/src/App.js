import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import './app.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}
          {/* <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }}>首页</NavLink>
          <NavLink to="/about" activeStyle={{ color: "red", fontSize: "30px" }}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{ color: "red", fontSize: "30px" }}>我的</NavLink> */}


          {/* 活跃路由默认会添加active类名 */}
          {/* <NavLink exact to="/">首页</NavLink>
          <NavLink to="/about" >关于</NavLink>
          <NavLink to="/profile" >我的</NavLink> */}

          <NavLink exact to="/" activeClassName="activeNavLink">首页</NavLink>
          <NavLink to="/about" activeClassName="activeNavLink">关于</NavLink>
          <NavLink to="/profile" activeClassName="activeNavLink">我的</NavLink>
          <NavLink to="/abc" activeClassName="activeNavLink">abc</NavLink>

          {/* Switch组件的作用，路由会进行排他操作，从上到下只匹配第一个 */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/abc" component={Profile} />
            <Route path="/:id" component={Profile} />
          </Switch>

        </BrowserRouter>


      </div>
    )
  }
}
