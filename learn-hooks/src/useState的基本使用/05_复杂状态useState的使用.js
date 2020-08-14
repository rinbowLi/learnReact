import React, { useState } from 'react'

export default function Counter5() {
  /**
   * useState 本身是一个函数，React包中的（需要传入一个默认值，否则state会返回一个undefined）
   * 然后返回一个数组；数组第一项是state,
   * 数组第二项是setState
   */
  const [names, setnames] = useState(["张三", "李四", "王五"]);

  const [students, setstudents] = useState([
    {id:1,name:"张大炮",age:18},
    {id:2,name:"李银河",age:19},
    {id:3,name:"曹大宝",age:17},
  ])

  function addNames1(){
    const newNames = [...names,"赵四"];
    setnames(newNames);
  }

  //错误的做法，因为内部会判断先后的状态是否相等（即是否是同一个引用）；相等的话就不会重新渲染
  function addNames2(){
    names.push("赵四");
    setnames(names);
  }

  function addAgeByIndex(index){
    let newStudents = [...students];
    newStudents[index].age+=1;
    setstudents(newStudents)
  }

  return (
    <div>
      <div>
        <h2>用户列表：</h2>
        <ul>
          {
            names.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <button onClick={addNames1}>添加用户1</button>
        <button onClick={addNames2}>添加用户2</button>
        <hr />

        <h2>学生列表：</h2>
        <ul>
          {
            students.map((item,index)=>(
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <button onClick={()=>addAgeByIndex(index)}>点击学生年龄+1</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
