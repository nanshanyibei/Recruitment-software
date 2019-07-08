import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync} from './index.redux'

const mapStatetoProps = (state) => {
	return { num: state }
}
const actionCreator = { addGUN, removeGUN, addGunAsync }

class App extends React.Component{
	render(){
		return (
			<div>
				<h1>现在有{this.props.num.counter}</h1>
				<button onClick = {this.props.addGUN}>再多一个</button>
				<button onClick = {this.props.removeGUN}>少一个</button>
				<button onClick = {this.props.addGunAsync}>拖两天再给</button>
			</div>
		)
	}
}

App = connect(mapStatetoProps, actionCreator)(App)

export default App