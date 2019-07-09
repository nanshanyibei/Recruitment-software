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
import reducers from './reducer'
import './config'
import './index.css'
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

function Boss(){
	return <h2>Boss页面</h2>
}

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute />
				<Route path = '/boss' component = {Boss}></Route>
				<Route path = '/login' component = {Login}></Route>
				<Route path = '/register' component = {Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>)
	,document.getElementById('root'))