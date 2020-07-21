import React, { PureComponent } from 'react'

import { addAction,changeAction } from '../store/actions'

// import {connect} from '../utils/connect'

import { connect } from 'react-redux'

import axios from 'axios'

class Home extends PureComponent {

  async componentDidMount() {
    let res = await axios("http://123.207.32.32:8000/home/multidata");
    console.log(res)
    this.props.change(res.data.data.banner.list.length)
  }

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
  },
  change(num) {
    dispatch(changeAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
