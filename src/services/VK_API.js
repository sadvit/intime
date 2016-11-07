const VK_API_ROOT = 'https://api.vk.com/method/'

export default class VK_API {

  static fetch(endpoint, params) {
    return new Promise((resolve, reject)=> {
      fetch(`${VK_API_ROOT}${endpoint}?${params}`, {
        headers: {
          "access_token": localStorage.getItem('access_token')
        },
        contentType: "application/json"
      })
      .then((success)=> {
        success.json()
          .then((json) => {
            if (success.ok) {
              resolve(json);
            } else {
              reject(json);
            }
          })
          .catch(error => {
            reject(error);
          })
      })
      .catch((failure)=> {
        reject(failure);
      })
    });
  }

}
