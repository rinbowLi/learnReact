import React, { PureComponent } from 'react'

import styled from 'styled-components';

const MyInput= styled.input.attrs({
  placeholder:"请输入用户名",
  bColor:"#f5f5f5"
})`
 border-color:${props=>props.bColor};
 color:${props=>props.fontColor};
`

export default class App extends PureComponent {

  state={
    color:"red"
  }
  render() {
    return (
      <div>
        <MyInput title="123465798" fontColor={this.state.color} />
      </div>
    )
  }
}
