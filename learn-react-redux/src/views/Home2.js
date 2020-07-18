import React, { PureComponent } from 'react'

import { addAction } from '../store/actions'

import {connect} from '../utils/connect'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>当前计数：{this.props.count}</h3>
        <button onClick={() => this.props.add(1)}>+1</button>
        <button onClick={() => this.props.add(5)}>+5</button>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  add(num) {
    dispatch(addAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
