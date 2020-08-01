import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {

  render() {
    console.log(this.props.location)
    return (
      <div>
        这里是Detail页面{this.props.location.search}
      </div>
    )
  }
}
