import React, { PureComponent } from 'react'
import { Route, Link, NavLink, Switch,withRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Product from './pages/Product'
import './app.css'
import Detail from './pages/Detail'
import Detail2 from './pages/Detail2'

import {renderRoutes} from 'react-router-config';
import routes from './router'

class App extends PureComponent {

  toProduct(){
    this.props.history.push("/product")
  }
  render() {
    let info ={name:"why",age:18,height:"188"}
    return (
      <div>
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
          <NavLink to="/productDetail/abcde" activeClassName="activeNavLink">产品详情</NavLink>
          <NavLink to="/detail?name=why&age=18" activeClassName="activeNavLink">产品详情2</NavLink>
          <NavLink to={{
            pathname:"/detail2",
            search:"?name=why",
            state:info
          }} activeClassName="activeNavLink">产品详情3</NavLink>
          <button onClick={()=>this.toProduct()}>产品</button>

          {/* Switch组件的作用，路由会进行排他操作，从上到下只匹配第一个 */}
          {renderRoutes(routes)}
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/abc" component={Profile} />
            <Route path="/product" component={Product} />
            <Route path="/productDetail/:id" component={Product} />
            <Route path="/detail" component={Detail} />
            <Route path="/detail2" component={Detail2} />
            <Route path="/:id" component={Profile} />
          </Switch> */}
      </div>
    )
  }
}

export default withRouter(App)
