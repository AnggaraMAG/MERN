import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import getBlog from './reducers/getBlog'
import testBlog from './reducers/testBlog'
import createBlog from './reducers/createBlog'
import thunk from 'redux-thunk'


const rootReducers = combineReducers({
  getBlog,
  testBlog,
  createBlog
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(rootReducers, enhancer)

export default store