import React, { PureComponent } from 'react'

import CommentItem from '@/components/commentItem'
import CommentInput from '@/components/commentInput'

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    }
  }

  addComment(item) {
    this.setState({
      commentList: [...this.state.commentList, item]
    })
  }

  removeItem(index){
    const newItem =[...this.state.commentList];
    newItem.splice(index,1);
    this.setState({
      commentList:newItem
    })
  }

  render() {
    return (
      <div style={{ width: "600px", padding: "20px" }}>
        <CommentItem commentList={this.state.commentList} removeItem={this.removeItem.bind(this)} />
        <CommentInput addComment={info => this.addComment(info)}  />
      </div>
    )
  }
}
