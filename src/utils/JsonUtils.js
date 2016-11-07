export default class JsonUtils {

  static extractSuccess(success) {
    return new Promise((resolve, reject)=> {
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
    });
  }

  static extractFailure(failure) {
    return new Promise((resolve, reject)=> {
      reject(failure);
    });
  }

}
