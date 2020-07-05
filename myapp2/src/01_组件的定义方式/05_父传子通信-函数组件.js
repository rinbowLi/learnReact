import React, { Component } from "react";


function ChildCpn(props){
  const {name,age,height} =props;
return (<div>{name + " " + age + " " + height}</div>)
}

export default class App extends Component {
  render() {
    return <div>
        <ChildCpn name="why" age="18" height ="188"/>
        <ChildCpn name="kebo" age="40" height ="198"/>
    </div>;
  }
}
