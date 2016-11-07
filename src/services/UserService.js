import VK_API from './VK_API'
import $ from 'jquery'
import JsonUtils from '../utils/JsonUtils'

export const fetchUsersInfo = (uids) => {
  let access_token = localStorage.getItem('access_token');
  let user_ids = uids.join(',');
  let fields = 'screen_name,photo_medium';
  return new Promise((resolve, reject)=> {
    VK_API.fetch('users.get', $.param({access_token, user_ids, fields}))
      .then(success => {
        JsonUtils.extractSuccess(success)
          .then((extSuccess)=> {
            resolve(extSuccess)
          })
          .catch((extFailure)=> {
            reject(extFailure);
          })
      })
      .catch(failure => {
        reject(failure);
      })
  });
}
