import $ from 'jquery'
import _ from 'lodash'

const VK_API_ROOT = 'https://api.vk.com/method/'

export default class VK_API {

  static fetch(endpoint, params, fetchParams = {}) {
    params['access_token'] = localStorage.getItem('access_token');
    let queryParams = $.param(params);
    return new Promise((resolve, reject)=> {
      let defaultFetchParams = {
        contentType: "application/json"
      }
      _.merge(defaultFetchParams, fetchParams);
      fetch(`${VK_API_ROOT}${endpoint}?${queryParams}`, defaultFetchParams).then((success) => {
        success.json().then((json) => {
          if (success.ok) {
            if (json.error) {
              reject(json.error);
            } else {
              resolve(json);
            }
          } else {
            reject(json);
          }
        }, (error) => {
          reject(error);
        })
      },
      (failure) => {
        reject(failure);
      })
    });
  }

}
