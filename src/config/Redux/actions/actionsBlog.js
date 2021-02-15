// import axios from 'axios'
import { UPDATE_DATA_BLOG, API } from '../constans'

export const setBlogs = (page, perPage) => (dispatch) => {

  API.get(`/blogs?page=${page}&perPage=${perPage}`)
    .then((res) => {
      const API = res.data
      dispatch({ type: `${UPDATE_DATA_BLOG}`, payload: API.data })
    })
    .catch((err) => {
      console.log(`err:`, err)
    })
  // axios.get('http://localhost:4000/v1/blogs')
  //   .then((res) => {
  //     const API = res.data
  //     dispatch({ type: `${UPDATE_DATA_BLOG}`, payload: API.data })
  //   })
  //   .catch((err) => {
  //     console.log(`err:`, err)
  //   })
}