import React from 'react'
import { addGUN } from './index.redux'

class App extends React.Component{
  // constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		test: "1234"
	// 	}
	// }
	render(){
		const store = this.props.store
		const num = store.getState()
		return <div>
			<h1>现在有{num}</h1>
			<button onClick = {() => store.dispatch(addGUN())}>再多一个</button>
		</div>
	}
}

export default App