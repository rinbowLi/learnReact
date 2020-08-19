import React, { useContext } from 'react'
import useUserContext from '../hooks/user-hook'
// import { UserContext, ThemeContext } from '../App'

export default function ContextShareDemo() {
  // const user =useContext(UserContext);
  // const theme =useContext(ThemeContext);

  const [user,theme] = useUserContext();
  console.log(user,theme)
  return (
    <div>
      ContextShareDemo
    </div>
  )
}
