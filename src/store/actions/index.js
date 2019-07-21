export const SET_PREV_PATH = 'SET_PREV_PATH'
export const setPrevPath = path => ({
  type: SET_PREV_PATH,
  data: path,
})

const url = 'http://3.1.203.88:8001/update?page='
export const FETCH_USERS = 'FETCH_USERS'
export const fetchUsers = (page) => async (dispatch, getState, api) => {
  const res = await api.get(url+page)

  dispatch({
    type: FETCH_USERS,
    data: res.data.data,
  })
}

// add other actions here
