import React, { PureComponent } from 'react'

import styled,{ThemeProvider} from 'styled-components';

const MyInput= styled.input.attrs({
  placeholder:"请输入用户名",
  bColor:"#f5f5f5"
})`
 border-color:${props=>props.theme.borderColor};
 color:${props=>props.fontColor};
`;


//组件继承
const PrimaryInput = styled(MyInput)`
color:blue;
`


export default class App extends PureComponent {

  state={
    color:"red"
  }
  render() {
    return (
      <ThemeProvider theme={{borderColor:"#000000"}}>
        <MyInput title="123465798" fontColor={this.state.color} />
        <PrimaryInput title="123465798" />
      </ThemeProvider>
    )
  }
}
