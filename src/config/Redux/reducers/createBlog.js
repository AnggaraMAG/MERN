import { CREATE_BLOG, SET_PREVIEW_IMAGE, SET_RESET } from '../constans'

const initialState = {
  form: {
    title: "",
    content: "",
    image: "",
  },
  imagePreview: null
}

const createBlog = (state = initialState, action) => {
  console.log(`createblog action:`, action)

  switch (action.type) {
    case `${CREATE_BLOG}`:
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue
        }
      }
    case `${SET_PREVIEW_IMAGE}`:
      return {
        ...state,
        imagePreview: action.payload
      }
    case `reset`:
      return initialState
    default:
      return state
  }
}

export default createBlog