import VK_API from './VK_API'

export default class UserService {

  static fetchUsersInfo(uids) {
    let user_ids = uids.join(',');
    let fields = 'screen_name,photo_medium';
    return VK_API.fetch('users.get', { user_ids, fields });
  }

}
