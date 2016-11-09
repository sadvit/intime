import _ from 'lodash'

const VK_API_ROOT = 'https://api.vk.com/method/'

export default class VK_API {

  static fetch(endpoint, params) {
    return new Promise((resolve, reject)=> {
      fetch(`${VK_API_ROOT}${endpoint}?${params}`, {
        headers: {
          "access_token": localStorage.getItem('access_token')
        },
        contentType: "application/json"
      }).then((success)=> {
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
