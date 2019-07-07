const ADD_GUN = 'AddMachineGun'
const REMOVE_GUN = 'LessMachineGun'

export function counter(state = 0, action){
	switch(action.type){
		case ADD_GUN:
			return state + 1
		case REMOVE_GUN:
			return state - 1
		default:
			return 10
	}
}

//action creator
export function addGUN(){
	return {type: ADD_GUN}
}
export function removeGUN(){
	return {type: REMOVE_GUN}
}