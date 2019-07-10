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
import BossInfo from './container/bossinfo/bossinfo'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute />
				<Switch>
					<Route path = '/bossinfo' component = {BossInfo}></Route>
					<Route path = '/login' component = {Login}></Route>
					<Route path = '/register' component = {Register}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>)
	,document.getElementById('root'))