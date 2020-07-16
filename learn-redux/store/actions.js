//actions
import { ADD_COUNT, SUB_COUNT } from './const.js'

export const addAction = num => ({
  type: ADD_COUNT,
  num
})

export const subAction = num => ({
  type: SUB_COUNT,
  num
})