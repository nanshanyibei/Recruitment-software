import axios from "axios";
import { getRedirectPath } from '../util'
import urlPath from './urlPath'

const ERROR_MSG = 'ERROR_MSG'
const LOGOUT = 'LOGOUT'
const AUTH_SUCCESS = "AUTH_SUCCESS"
const LOAD_DATA = "LOAD_DATA"
const initState = {
	redirectTo: '',
	msg: "",
	user: "",
	type: ""
}

//reducer
export function user(state = initState, action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state, msg: "", redirectTo: getRedirectPath(action.payload), ...action.payload}
		case LOAD_DATA:
			return {...state, ...action.payload}
		case ERROR_MSG:
			return {...state, msg: action.msg, isAuth: false}
		case LOGOUT:
			return {...initState, redirectTo: '/login'}
		default:
			return state
	}
}

function authSuccess(obj){
	const {pwd, ...data} = obj
	return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg){
	return {msg, type: ERROR_MSG}
}

export function loadData(userinfo){
	return { type: LOAD_DATA, payload: userinfo }
}

export function logoutSubmit(){
	return { type: LOGOUT }
}

export function userinfo(){
	return dispatch => {
		//获取用户信息
		axios.get(urlPath + '/user/info')
		.then(res => {
			if (res.status === 200){
				if(res.data.code === 0){
					//有登录信息
				} else {
					this.props.loadData(res.data.data)
					this.props.history.push('/login')
				}
			}
		})
		//是否登录，现在的url地址，login是不需要跳转的
		// 用户的type 身份是boss还是牛人
		//用户是否完善信息（选择头像，个人简介）
	}
}

export function update(data){
	return dispatch => {
		axios.post(urlPath + '/user/update',data)
			.then(res => {
				if(res.status === 200 && res.data.code === 0){
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

export function login({user, pwd}){
	if(!user || !pwd){
		return errorMsg("用户密码必须输入")
	}
	return dispatch => {
		axios.post(urlPath + '/user/login', {user, pwd})
			.then(res => {
				if(res.status === 200 && res.data.code === 0){
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}

export function register({user, pwd, repeatpwd, type}){
	if(!user || !pwd || !type){
		return errorMsg("用户名密码必须输入")
	}
	if(pwd !== repeatpwd){
		return errorMsg("密码和确认密码不同")
	}
	return dispatch => {
		axios.post(urlPath + "/user/register",{user,pwd,type})
			.then(res => {
				if(res.status === 200 && res.data.code === 0){
					dispatch(authSuccess({user,pwd,type}))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
	
}