import { UPDATE_NAME, UPDATE_DATA_BLOG } from '../constans'
const initialState = {
  data: [],
  name: 'sarimin'
}

const addBlog = (state = initialState, action) => {
  console.log(`addblog`, action)
  switch (action.type) {
    case `${UPDATE_NAME}`:
      return {
        ...state,
        name: 'martiin'
      };
    case `${UPDATE_DATA_BLOG}`:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default addBlog;