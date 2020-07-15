import React, { PureComponent } from 'react'

import moment from 'moment'

import { Input, Button } from 'antd'

const { TextArea } = Input;

export default class index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }
  handleClick(e) {
    const commentInfo = {
      id: moment().valueOf(),
      name: "coderwhy",
      avatar: "https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      datetime: moment(),
      content: this.state.inputValue
    }
    this.props.addComment(commentInfo);
    this.setState({ inputValue: "" })

  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <TextArea rows={4} onInput={(e) => this.handleInput(e)} value={this.state.inputValue} />
        <Button onClick={(e) => this.handleClick(e)} type="primary" style={{ marginTop: "30px" }}>发表评论</Button>
      </div>
    )
  }
}
