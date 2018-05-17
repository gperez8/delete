import { OPEN_DRAWER, CLOSE_DRAWER } from '../../actions/Header/actionsTypes';

const ReducerHeader = (state = {}, action = {}) => {
	switch(action.type) {
		case OPEN_DRAWER:
			return [...state, {drawer: {open: true}}]
		case CLOSE_DRAWER:
			return [...state, {drawer: {open: false}}]
		default:
			return state;
		break;
	}
}

export default ReducerHeader;