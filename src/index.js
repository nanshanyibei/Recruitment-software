import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { 
	BrowserRouter, 
	Route, 
	Switch,
	Redirect
} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducer'
import './config'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path = '/login' component = {Auth}></Route>
				<Route path = '/dashboard' component = {Dashboard}></Route>
				<Redirect to = '/dashboard'></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>)
	,document.getElementById('root'))