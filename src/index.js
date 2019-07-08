import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { 
	BrowserRouter, 
	Route, 
	Switch,
	Redirect,
	Link
} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import reducers from './reducer'

const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))


// 登录
// 	没有登录信息、同一条转login
// 页面 导航+显示+注销
// 	一营
// 	二营
// 	骑兵连
// router+redux

class Test extends React.Component{
	constructor(props) {
		super (props)
	}
	render(){
		console.log(this.props)
		return <h2>测试组件：{this.props.match.params.location}</h2>
	}
}

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