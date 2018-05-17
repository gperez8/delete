import { OPEN_DRAWER, CLOSE_DRAWER } from '../../actions/Header/actionsTypes';

const ReducerHeader = (state = {drawer: { open: true }}, action = {}) => {
	switch(action.type) {
		case OPEN_DRAWER:
			return  ({drawer: {open: true}})
		case CLOSE_DRAWER:
			return  ({drawer: {open: false}})
		default:
			return state;
		break;
	}
}

export default ReducerHeader;