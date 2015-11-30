import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore({
  garages: require("./data/garages"),
  cities: require("./data/cities"),
  retailers: require("./data/retailers"),
  typeFilter: {garage: true, retailer: true},
  currentParking: null, // garageId, startedAt, costs
  cityFilter: [] // city_id
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
