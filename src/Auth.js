import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'

connect()

class Auth extends React.Component{
  constructor(props) {
		super(props)
	}
	render(){
		return <h2>Auth Page</h2>
	}
}

//两个reducers，每个reducs都有一个state
//合并reducers
const mapStatetoProps = (state) => {
	return { num: state }
}
const actionCreator = { addGUN, removeGUN, addGunAsync }
App = connect(mapStatetoProps, actionCreator)(App)

export default Auth