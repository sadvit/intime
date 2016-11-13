import UserService from '../services/UserService'

export const USER_VK_REQUEST = 'USER_VK_REQUEST';
export const USER_VK_SUCCESS = 'USER_VK_SUCCESS';
export const USER_VK_FAILURE = 'USER_VK_FAILURE';

export const loadUserVk = (user_id) => (dispatch, getState) => {
  dispatch({ type: USER_VK_REQUEST });
  UserService.fetchUsersInfo([user_id]).then(
    (success) => {
      dispatch({ type: USER_VK_SUCCESS, success });
    },
    (failure) => {
      dispatch({ type: USER_VK_FAILURE, failure });
    }
  )
}
