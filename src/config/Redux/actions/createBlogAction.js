import { CREATE_BLOG, SET_PREVIEW_IMAGE } from '../constans'
import { UPDATE_DATA } from '../../API'

const header = {
  headers: { "Content-Type": "multipart/form-data" },
}

export const setForm = (formType, formValue) => {
  console.log(`formType:`, formType)
  console.log(`formValue:`, formValue)
  return { type: CREATE_BLOG, formType, formValue }
}
export const setImagePreview = (payload) => {
  console.log(`payload:`, payload)
  return { type: SET_PREVIEW_IMAGE, payload }
}

export const sendFormtoAPI = async (form) => {
  const data = new FormData()
  data.append('title', form.title)
  data.append('content', form.content)
  data.append('image', form.image)

  const result = await UPDATE_DATA('blog', data, header)
  if (result.status === 201) {
    console.log(`success:`, result)
  } else {
    console.log(`error:`, result)
  }
}