import React, { useContext } from 'react'

import {UserContext,ThemeContext} from '../App'

export default function Context() {

  const User =useContext(UserContext);
  const Theme =useContext(ThemeContext);
  console.log(User,Theme)
  return (
    <div>
      123
    </div>
  )
}
