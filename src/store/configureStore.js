import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import DevTools from '../containers/DevTools'
var StoreFeatures = []
if (process.env.NODE_ENV === 'development') {
  StoreFeatures = require("./configureStore.dev")
}

const composedStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = composedStore(reducer, initialState)

  // When using WebPack, module.hot.accept should be used. In LiveReactload,
  // same result can be achieved by using "module.onReload" hook.
  if (module.onReload) {
    module.onReload(() => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
      // return true to indicate that this module is accepted and
      // there is no need to reload its parent modules
      return true
    })
  }

  return store
}
