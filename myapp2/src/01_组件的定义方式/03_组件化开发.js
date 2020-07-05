import React, { Component } from "react";

//Header
function Header() {
  return <h2>我是Header组件</h2>;
}

//main
function Banner() {
  return <h3>我是banner组件</h3>;
}

function ProductList() {
  return (
    <ul>
      <li>我是商品</li>
      <li>我是商品</li>
      <li>我是商品</li>
      <li>我是商品</li>
      <li>我是商品</li>
    </ul>
  );
}

function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}


//Footer

function Footer(){
    return <h2>我是Footer组件</h2>
}

export default class App extends Component {
  render() {
    return (<div>
        <Header/>
        <Main/>
        <Footer/>
    </div>);
  }
}
