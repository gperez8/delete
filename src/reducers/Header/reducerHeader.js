import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	OPEN_PROFILE,
	CLOSE_PROFILE
} from '../../actions/Header/actionsTypes';


const stateInitial = {
	openSideBar: false,
	openMenuProfile: null
}

const ReducerHeader = (state = stateInitial, action = {}) => {
	switch(action.type) {
		case OPEN_DRAWER:
			return  ({
				...state,
				openSideBar: true
			})
		case CLOSE_DRAWER:
			return  ({
				...state,
				openSideBar: false
			})
		case OPEN_PROFILE:
			return ({
				...state,
				openMenuProfile: action.payload.event
			})
		case CLOSE_PROFILE:
			return ({
				...state,
				openMenuProfile: null
			})
		default:
			return state;
	}
}

export default ReducerHeader;
