import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      titles: ["流行", "新款", "精选"],
      curIndex: 0,
    };
  }

  setCurIndex = (index) => {
    this.setState({
      curIndex: index,
    });
  };
  render() {
    const { titles, curIndex } = this.state;
    return (
      <div>
        <TabCtrl
          titles={titles}
          curIndex={curIndex}
          setCurIndex={this.setCurIndex}
        ></TabCtrl>
        <h2>{titles[curIndex]}</h2>
      </div>
    );
  }
}

class TabCtrl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { titles, curIndex, setCurIndex } = this.props;
    return (
      <div className="tab-control">
        {titles.map((v, i) => {
          return (
            <div
              className={curIndex === i ? "tab-item active" : "tab-item"}
              key={v}
              onClick={() => setCurIndex(i)}
            >
              <span>{v}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
