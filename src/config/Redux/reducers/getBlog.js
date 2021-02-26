import { UPDATE_PAGE, GET_ALL_BLOGS } from '../constans'
const initialState = {
  data: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  }
}

const getBlog = (state = initialState, action) => {
  // console.log(`getBlog`, action)
  switch (action.type) {
    case `${GET_ALL_BLOGS}`:
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

export default getBlog;