import React, { PureComponent } from 'react'
import moment from 'moment';

import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';

export default class index extends PureComponent {

  render() {
    const { commentList } = this.props;
    return (
      <div>
        {
          commentList.map((v, i) => {
            return (<Comment
              author={<a href="/#">{v.name}</a>}
              actions={[<span onClick={() => this.props.removeItem(i)}><DeleteOutlined />删除</span>]}
              key={v.id}
              avatar={
                <Avatar
                  src={v.avatar}
                  alt=""
                />
              }
              content={
                <p>
                  {v.content}
                </p>
              }
              datetime={
                <Tooltip title={moment(v.datetime).format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />)
          })
        }
      </div>
    )
  }
}
