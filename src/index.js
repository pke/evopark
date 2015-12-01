import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const FEATURES = [
  {
    name: "women_places",
    pattern: /(?:(\d+) )?(Damen|Frauen)/i,
  },
  {
    name: "handicapped_places",
    pattern: /(?:(\d+) )?Behindert/i,
  }
]

const featureFromDescription = (description, pattern) => {
  if (description) {
    var matches = description.match(pattern)
    if (matches) {
      return {
        value: matches[1]
      }
    }
  }
}

let garages = require("./data/garages").map(garage => {
  //FIXME: This patching should be removed when implemented in the API
  if (!garage.features) {
    garage.features = {}
    FEATURES.forEach(feature => {
      let result = featureFromDescription(garage.description, feature.pattern)
      if (result) {
        garage.features[feature.name] = result.value ? result.value : true
      }
    })
  }
  return garage
})


const store = configureStore({
  garages: garages,
  cities: require("./data/cities"),
  retailers: require("./data/retailers"),
  typeFilter: {garage: true, retailer: true},
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
