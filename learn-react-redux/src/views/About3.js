import React, { PureComponent } from 'react'


import { subAction } from '../store/actions'

// import { connect } from '../utils/connect'

import {connect} from 'react-redux'

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <h3>当前计数：{props.count}</h3>
      <button onClick={() => props.sub(1)}>-1</button>
      <button onClick={() => props.sub(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  sub(num) {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)




