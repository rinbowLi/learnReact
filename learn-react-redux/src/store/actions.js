import axios from 'axios'

//actions
import { ADD_COUNT, SUB_COUNT ,CHANGR_COUNT} from './const.js'

export const addAction = num => ({
  type: ADD_COUNT,
  num
})

export const subAction = num => ({
  type: SUB_COUNT,
  num
})

export const changeAction = num =>({
  type:CHANGR_COUNT,
  num
})


//可以用getState去获取redux的数据
export const getHomeData = async (dispatch,getState)=>{
      let res = await axios("http://123.207.32.32:8000/home/multidata");
    console.log(res)
    console.log(res.data.data.banner.list)
    dispatch(changeAction(res.data.data.banner.list.length))
} 