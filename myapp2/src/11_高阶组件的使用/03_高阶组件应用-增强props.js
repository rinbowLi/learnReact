import React, { PureComponent, createContext } from "react";

function withUser(WrappedComponent) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

const UserContext = createContext({
  nickname: "why",
  level: -1,
  region: "中国",
});

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home:
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        About:
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h2>
    );
  }
}

const WithUserHome = withUser(Home);
const WithUserAbout = withUser(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider
          value={{ nickname: "why", level: 90, region: "中国" }}
        >
          <WithUserHome />
          <WithUserAbout />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
