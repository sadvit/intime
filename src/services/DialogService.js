import VK_API from './VK_API'
import _ from 'lodash'
import $ from 'jquery'
import JsonUtils from '../utils/JsonUtils'
import { fetchUsersInfo } from '../services/UserService'

export default class DialogService {

  static findUserIds(extSuccess) {
    let arr = extSuccess.response.slice(1, extSuccess.response.length);
    return _.map(arr, 'uid');
  }

  static concatInfo(dialogs, infos) {
    let _dialogs = dialogs.response.slice(1, dialogs.response.length);
    let _infos = infos.response;
    let result = [];
    _dialogs.forEach((dialog)=> {
      let inform = _.findLast(_infos, (info)=> {
        return info.uid == dialog.uid;
      });
      dialog.photo = inform.photo_medium
    })
    return _dialogs;
  }

  static fetchDialogs(offset, count) {
    let access_token = localStorage.getItem('access_token');
    return new Promise((resolve, reject)=> {
      VK_API.fetch('messages.getDialogs', $.param({access_token, offset, count}))
        .then(success => {
          JsonUtils.extractSuccess(success)
            .then((extSuccess)=> {
              let ids = DialogService.findUserIds(extSuccess);
              fetchUsersInfo(ids)
                .then((success)=> {
                  let dialogs = DialogService.concatInfo(extSuccess, success);
                  resolve(dialogs);
                })
                .catch((failure)=> {
                  reject(failure);
                })
            })
            .catch((extFailure)=> {
              reject(extFailure);
            })
        })
        .catch(failure => {
          reject(failure);
        })
    })
  }

}
