import { devTools, persistState } from 'redux-devtools'
import createLogger from 'redux-logger'

export default storeFeatures = [
  applyMiddleware(createLogger()),
  devTools,
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
]
