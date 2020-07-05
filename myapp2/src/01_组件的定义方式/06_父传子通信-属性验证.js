import React, { Component } from "react";

import PropTypes from "prop-types";

class ChildCpn extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    const { name, age, height, names } = this.props;
    return (
      <div>
        <div>{name + " " + age + " " + height}</div>
        {names.map((v) => {
          return <li>{v}</li>;
        })}
      </div>
    );
  }
}

//组件props类型的验证
ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array.isRequired,
};

ChildCpn.defaultProps = {
  name: "aaa",
  age: 18,
  height: 180,
  names: [11, 22, 33],
};


//也可以这么写，因为是类的属性也就是静态属性
class ChildCpn2 extends Component {
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    names: PropTypes.array.isRequired,
  };
  static defaultProps = {
    name: "aaa",
    age: 18,
    height: 180,
    names: [11, 22, 33],
  };
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age={18} height={188} names={[1, 2, 3, 4, 5]} />
        <ChildCpn />
        <ChildCpn
          name="kebo"
          age={40}
          height={198}
          names={[22, 23, 34, 456, 85]}
        />
      </div>
    );
  }
}
