import axios from 'axios'
import {CHANGE_HOME_LIST} from './contants'

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  payload: list
})

export const getHomeList = () => async (dispatch) => {
  const {data: list} = await axios.get('http://127.0.0.1:3000/api/news')
  console.log(list)
  dispatch(changeList(list))
}
