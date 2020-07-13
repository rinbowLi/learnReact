import React, { PureComponent } from 'react'

import style from './style.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={style.home}>home</h2>
        <p className={style.about}>about</p>
      </div>
    )
  }
}
