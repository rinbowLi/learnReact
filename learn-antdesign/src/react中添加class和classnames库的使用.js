import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class App extends PureComponent {
  state={
    isActive:true
  }
  render() {
    const isActive =this.state;
    const isBar = true;
    const errorClass ="error";
    const warnClass = null;
    const undefinedClass = undefined;
    const _class = 0;
    return (
      <div>
        {/* react原生添加class */}
        <h2 className="title active">我是标题1</h2>
        <h2 className={"title "+(isActive?"active":"")}>我是标题2</h2>
        <h2 className={["title","active","test"].join(" ")}>我是标题3</h2>


        <h2 className={classNames("title","active","test")}>我是标题4</h2>
        <h2 className={classNames({active:isActive,bar:isBar},"title")}>我是标题5</h2>
        <h2 className={classNames(["title","active","test"])}>我是标题6</h2>
        <h2 className={classNames(errorClass,"title",warnClass,undefinedClass,_class)}>我是标题7</h2>
        <h2 className={classNames(["title","active","test",{isActive}])}>我是标题8</h2>
        <h2>我是标题9</h2>
        <h2>我是标题10</h2>
        <h2>我是标题11</h2>
        <h2>我是标题12</h2>
      </div>
    )
  }
}
