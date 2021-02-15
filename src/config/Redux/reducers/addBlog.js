import { UPDATE_PAGE, UPDATE_DATA_BLOG } from '../constans'
const initialState = {
  data: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  }
}

const addBlog = (state = initialState, action) => {
  // console.log(`addblog`, action)
  switch (action.type) {
    case `${UPDATE_DATA_BLOG}`:
      return {
        ...state,
        data: action.payload
      }
    case `${UPDATE_PAGE}`:
      return {
        ...state,
        page: action.payload
      }
    default:
      return state
  }
}

export default addBlog;