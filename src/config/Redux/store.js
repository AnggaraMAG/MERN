import { createStore, combineReducers, applyMiddleware } from 'redux'
import addBlog from './reducers/addBlog'
import testBlog from './reducers/testBlog'
import thunk from 'redux-thunk'


const rootReducers = combineReducers({
  addBlog,
  testBlog
})
const store = createStore(rootReducers, applyMiddleware(thunk))

export default store