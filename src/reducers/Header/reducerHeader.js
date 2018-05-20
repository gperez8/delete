import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	OPEN_PROFILE,
	CLOSE_PROFILE
} from '../../actions/Header/actionsTypes';


const stateInitial = {
	drawer: {
		openSideBar: false,
		openMenuProfile: false
	}
}

const ReducerHeader = (state = stateInitial, action = {}) => {
	let newState = {};

	switch(action.type) {
		case OPEN_DRAWER:
			newState = {...state};
			newState.drawer.openSideBar = true;
			return  (newState)
		case CLOSE_DRAWER:
			newState = {...state};
			newState.drawer.openSideBar = false;
			return  (newState)
		case OPEN_PROFILE:
			newState = {...state};
			newState.drawer.openMenuProfile = true;
			return (newState)
		case CLOSE_PROFILE:
			newState = {...state};
			newState.drawer.openMenuProfile = false;
			return (newState)
		default:
			return state;
		break;
	}
}

export default ReducerHeader;
