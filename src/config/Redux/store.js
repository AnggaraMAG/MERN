import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import addBlog from './reducers/addBlog'
import testBlog from './reducers/testBlog'
import thunk from 'redux-thunk'


const rootReducers = combineReducers({
  addBlog,
  testBlog
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(rootReducers, enhancer)

export default store