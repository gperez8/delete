import { OPEN_DRAWER, CLOSE_DRAWER } from '../../actions/Header/actionsTypes';

const ReducerHeader = (state = {drawer: { openSideBar: false }}, action = {}) => {
	switch(action.type) {
		case OPEN_DRAWER:
			return  ({drawer: { openSideBar: true }})
		case CLOSE_DRAWER:
			return  ({drawer: { openSideBar: false }})
		default:
			return state;
		break;
	}
}

export default ReducerHeader;
