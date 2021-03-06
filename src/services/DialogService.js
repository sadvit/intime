import VK_API from './VK_API'
import _ from 'lodash'
import UserService from '../services/UserService'
import * as Utils from '../services/Utils'

export default class DialogService {

  static findUserIds(dialogs) {
    let arr = dialogs.response.slice(1, dialogs.response.length);
    return _.map(arr, 'uid');
  }

  static concatInfo(dialogs, infos) {
    let _dialogs = dialogs.response.slice(1, dialogs.response.length);
    let _infos = infos.response;
    _dialogs.forEach((dialog)=> {
      let inform = _.findLast(_infos, (info)=> {
        return info.uid === dialog.uid;
      });
      if (inform) {
        dialog.photo = inform.photo_medium;
        if (Utils.isEmptyTitle(dialog.title)) {
          dialog.title = `${inform.first_name} ${inform.last_name}`;
        }
      }
    })
    return _dialogs;
  }

  static fetchDialogs(offset, count) {
    return new Promise((resolve, reject)=> {
      VK_API.fetch('messages.getDialogs', {offset, count}).then(
        (dialogs) => {
          let ids = DialogService.findUserIds(dialogs);
          UserService.fetchUsersInfo(ids).then(
            (infos) => {
              resolve(DialogService.concatInfo(dialogs, infos));
            },
            (failure) => {
              reject(failure);
            }
          )
        },
        (failure) => {
          reject(failure);
        })
    })
  }

}
