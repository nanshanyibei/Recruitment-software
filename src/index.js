import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { 
	BrowserRouter, 
	Route, 
	Switch,
} from 'react-router-dom'
import reducers from './reducer'
import './config'
import './index.css'
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Dashboard from './component/dashborad/dashborad'
import Chat from './component/chat/chat'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

//boss genius me message 4个页面
ReactDOM.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute />
				<Switch>
					<Route path = '/bossinfo' component = {BossInfo}></Route>
					<Route path = '/geniusinfo' component = {GeniusInfo}></Route>
					<Route path = '/login' component = {Login}></Route>
					<Route path = '/register' component = {Register}></Route>
					<Route path = '/chat/:user' component = {Chat}></Route>
					<Route component = {Dashboard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>)
	,document.getElementById('root'))