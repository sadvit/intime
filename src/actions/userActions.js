import { CALL_API } from '../middleware/api'
import $ from 'jquery'
import { fetchUsersInfo } from '../services/UserService'

export const USER_VK_REQUEST = 'USER_VK_REQUEST';
export const USER_VK_SUCCESS = 'USER_VK_SUCCESS';
export const USER_VK_FAILURE = 'USER_VK_FAILURE';

export const loadUserVk = (userId) => (dispatch, getState) => {
  let access_token = localStorage.getItem('access_token');
  let user_ids = `${userId}`;
  let fields = "screen_name,photo_medium"
  dispatch({ type: USER_VK_REQUEST });
  fetchUsersInfo([userId])
    .then(success => {
      dispatch({ type: USER_VK_SUCCESS, success });
    })
    .catch(failure => {
      dispatch({ type: USER_VK_FAILURE, failure });
    })
}
