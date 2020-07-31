import React, { PureComponent } from 'react'

export default class Product extends PureComponent {
  render() {
    console.log(this.props.match)
    return (
      <div>
        这里是产品页 产品id是{this.props.match.params.id}
      </div>
    )
  }
}
