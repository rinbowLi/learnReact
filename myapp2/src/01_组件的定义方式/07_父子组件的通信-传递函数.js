import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      conut: 0,
    };
  }

  add=()=> {
    this.setState({
      count: this.state.conut += 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>{count || "0"}</h2>
        <button onClick={() => this.add()}>点击加1</button>
        <AddButton addFn={this.add}></AddButton>
      </div>
    );
  }
}


class AddButton extends Component{
  constructor(props) {
    super(props);
    
  }

  render() {
    const {addFn} = this.props;
    return (
      <div>
        <button onClick={() => addFn()}>点击加1</button>
      </div>
    );
  }
}
