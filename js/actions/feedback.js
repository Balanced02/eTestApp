export const SHOW_INFO = 'SHOW_INFO'
export const CLEAR_INFO = 'CLEAR_INFO'
export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function showInfo(info) {
  return dispatch => {
    dispatch({
      type: SHOW_INFO,
      info,
    })
    setTimeout(() => {
      dispatch(clearInfo())
    }, 6000)
  }
}

export function clearInfo() {
  return {
    type: CLEAR_INFO,
  }
}

export function showError(error) {
  return dispatch => {
    dispatch({
      type: SHOW_ERROR,
      error,
    })
    setTimeout(() => {
      dispatch(clearError())
    }, 7000)
  }
}

export function clearError() {
  return {
    type: CLEAR_ERROR,
  }
}
