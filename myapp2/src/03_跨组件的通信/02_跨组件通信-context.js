import React, { Component } from "react";

//定义context对象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1,
});

// function ProfileHeader(props) {
//   return (
//     <div>
//       <h2>用户昵称: </h2>
//       <h2>用户等级: </h2>
//     </div>
//   );
// }

//函数组件无法直接获取context
class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <h2>用户昵称: </h2>
        <h2>用户等级: </h2>
      </div>
    );
  }
}

ProfileHeader.contextType = UserContext;

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "kobe",
      level: 99,
    };
  }

  render() {
    // const {nickname, level} = this.state;

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}
