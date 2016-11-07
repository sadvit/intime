import VK_API from './VK_API'
import $ from 'jquery'

export default class UserService {

  static fetchUsersInfo(uids) {
    let access_token = localStorage.getItem('access_token');
    let user_ids = uids.join(',');
    let fields = 'screen_name,photo_medium';
    return VK_API.fetch('users.get', $.param({access_token, user_ids, fields}));
  }

}
