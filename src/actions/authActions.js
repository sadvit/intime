import AuthService from '../services/AuthService'
import { push } from 'react-router-redux'
import { loadUserVk } from './userActions'

export const LOGIN_VK_WINDOW_SHOW = 'LOGIN_VK_WINDOW_SHOW';
export const LOGIN_VK_WINDOW_SUCCESS = 'LOGIN_VK_WINDOW_SUCCESS';
export const LOGIN_VK_WINDOW_FAILURE = 'LOGIN_VK_WINDOW_FAILURE';

export const loginVk = () => (dispatch, getState) => {
  dispatch({type: LOGIN_VK_WINDOW_SHOW})
  AuthService().then(
    (userId) => {
      dispatch({type: LOGIN_VK_WINDOW_SUCCESS})
      dispatch(push('/messages'))
      loadUserVk(userId)(dispatch)
    },
    (error) => {
      dispatch({type: LOGIN_VK_WINDOW_FAILURE, error})
    }
  )
}
