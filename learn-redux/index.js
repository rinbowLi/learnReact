import store from './store/index.js'

import {addAction,subAction} from './store/actions.js'

store.subscribe(() => {
  console.log(`当前的count是：${store.getState().count}`)
})

//派发
store.dispatch(addAction(10));
store.dispatch(addAction(5));
store.dispatch(subAction(15));
store.dispatch(subAction(8));