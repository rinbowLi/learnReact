import React from 'react'
import useLocalStorageHook from '../hooks/localStorage-hook'

export default function LocalStorageHookDemo() {

  const [name, setName] = useLocalStorageHook("name");
  return (
    <div>
      LocalStorageHookDemo现在的名字是：{name}
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}
