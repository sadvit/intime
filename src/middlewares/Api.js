import VK_API from '../services/VK_API'

export const CALL_API = 'CALL_API'

export default store => next => action => {
  const callAction = action[CALL_API]

  if (typeof callAction === 'undefined') {
    return next(action);
  }

  let { types, endpoint, params, fetchParams } = callAction;
  let { info } = action;
  const [ requestType, successType, failureType ] = types;
  next({ type: requestType, info });
  VK_API.fetch(endpoint, params, fetchParams).then(
    (success) => next({ type: successType, success, info }),
    (failure) => next({ type: failureType, failure, info })
  )
}
