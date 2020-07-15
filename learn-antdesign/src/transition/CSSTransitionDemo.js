import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './CSSTransitionDemo.css'

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  state={
    isShow:true
  }
  render() {
    const {isShow} =this.state;
    return (
      <>
        <button onClick={()=>this.setState({isShow:!isShow})}>显示/隐藏</button>
        <CSSTransition 
        in={isShow} 
        timeout={300} 
        classNames="card"
        unmountOnExit={true}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </>
    )
  }
}
