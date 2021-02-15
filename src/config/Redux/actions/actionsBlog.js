import { UPDATE_DATA_BLOG, API, UPDATE_PAGE } from '../constans'

export const setBlogs = (page) => (dispatch) => {

  API.get(`/blogs?page=${page}&perPage=2`)
    .then((res) => {
      const API = res.data
      // console.log(`APIII`, API)
      dispatch({ type: `${UPDATE_DATA_BLOG}`, payload: API.data })
      dispatch({
        type: `${UPDATE_PAGE}`,
        payload: {
          currentPage: API.current_page,
          totalPage: Math.ceil(API.total_records / API.rows_perPage)
        }
      })
    })
    .catch((err) => {
      console.log(`err:`, err)
    })
}