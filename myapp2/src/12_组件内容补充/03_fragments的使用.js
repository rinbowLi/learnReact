import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      // Fragment正常写法
      <Fragment id="12">
        <h2>123</h2>
      </Fragment>

      //空标签的时候不能加任何属性
      // <>
      //   <h2>123</h2>
      // </>
    )
  }
}
