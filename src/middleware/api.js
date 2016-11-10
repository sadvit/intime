const API_ROOT = 'https://api.vk.com/method/'

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'CALL_API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method } = callAPI
  const { types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    let apiAction = action[CALL_API];
    delete apiAction['endpoint'];
    delete apiAction['method'];
    delete apiAction['types'];
    const finalAction = Object.assign({}, apiAction, data)
    return finalAction
  }

  const [ requestType, successType ] = types
  next(actionWith({ type: requestType }))

  // NOTE: now only for VK root address
  let promise = fetch(API_ROOT + endpoint, {
    method: method,
    headers: {
      "access_token": localStorage.getItem('access_token')
    },
    contentType: "application/json"
  })

  promise.then(
    (response) => {
      response.json().then(
        (json) => {
          if (response.ok) {
            next(actionWith({
              type: successType,
              response: json
            }))
          } else {
            //handleErrorCode(json)(next);
          }
        },
        (error) => {
          //showError(error.message)(next);
        })
  }, (error) => {
    //showError(error.message)(next);
  })
}
