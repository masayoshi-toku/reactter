import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import tweetReducer, { initialState } from './reducer'
import * as serviceWorker from './serviceWorker'

import './styles/index.css'
import './styles/semantic.min.css'

const store = createStore(tweetReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
