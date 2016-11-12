
export const WINDOW_CLOSE = 'WINDOW_CLOSE';
export const WINDOW_MINIMIZE = 'WINDOW_MINIMIZE';

export const windowMinimize = () => (dispatch, getState) => {
  dispatch({type: WINDOW_MINIMIZE})
}

export const windowClose = () => (dispatch, getState) => {
  dispatch({type: WINDOW_CLOSE})
}
