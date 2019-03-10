import axios from '../../../request'
import {SET_HEADER_INFO} from './contants'

const setHeaderInfo = (isLogin) => ({
  type: SET_HEADER_INFO,
  payload: isLogin
})

export const getHeaderInfo = () => async (dispatch) => {

  const {data: {isLogin}} = await axios.get('/api/isLogin')
  dispatch(setHeaderInfo(isLogin))
}

export const handleLogin = () => async (dispatch) => {
  const {data: {success}} = await axios.get('/api/login')
  if (success) dispatch(setHeaderInfo(true))
}

export const handleLogout = () => async (dispatch) => {
  const {data: {success}} = await axios.get('/api/logout')
  if (success) dispatch(setHeaderInfo(false))
}

