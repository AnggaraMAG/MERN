import { GET_ALL_BLOGS, UPDATE_PAGE } from '../constans'
import { GET_DATA } from '../../API'

export const setBlogs = (page) => async (dispatch) => {

  const result = await GET_DATA("blogs", page);
  if (result.status === 200) {
    const data = result.data
    dispatch({ type: `${GET_ALL_BLOGS}`, payload: data.data })
    dispatch({
      type: `${UPDATE_PAGE}`,
      payload: {
        currentPage: data.current_page,
        totalPage: Math.ceil(data.total_records / data.rows_perPage)
      }
    })
  } else {
    console.log(`error`, result.data)
  }
}