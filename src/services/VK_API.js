
const VK_API_ROOT = 'https://api.vk.com/method/'

export default class VK_API {

  static fetch(endpoint, params) {
    return fetch(`${VK_API_ROOT}${endpoint}?${params}`, {
      headers: {
        "access_token": localStorage.getItem('access_token')
      },
      contentType: "application/json"
    });
  }

}
