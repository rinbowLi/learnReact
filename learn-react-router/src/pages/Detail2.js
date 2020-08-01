import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {

  render() {
    console.log(this.props.location)
    return (
      <div>
        这里是Detail2页面
      </div>
    )
  }
}
