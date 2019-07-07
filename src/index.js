import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { counter } from './index.redux'
import { Provider } from 'react-redux'

const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
	(<Provider store={store}>
		<App />
	</Provider>)
	,document.getElementById('root'))

// render()

// store.subscribe(render)