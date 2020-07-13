import React, { PureComponent } from 'react'

import styled from 'styled-components'

const HomeStyle = styled.div`
 font-size:20px;
 color:#ffffff;
  h2{
    color:#999999;
  }
.title{
  font-size:15px;
  color:#666;
  background-color:blue;
  span{
    font-weight:600;
    &.avtive{
    color:red;
  }
    &:hover{
      color:green;
    }

    &::after{
      content:"abc"
    }
  }
}
`

export default class App extends PureComponent {
  render() {
    return (
      <HomeStyle>
        <h2>哈哈哈哈</h2>
        <div className="title">
          <span>元素1</span>
          <span className="active">元素2</span>
          <span>元素3</span>
          <span>元素4</span>
        </div>
      </HomeStyle>
    )
  }
}
