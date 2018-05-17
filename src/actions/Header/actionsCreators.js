import { OPEN_DRAWER, CLOSE_DRAWER } from './actionsTypes';

const openDrawer = () => ({
	type: OPEN_DRAWER,
	payload: {
		description: OPEN_DRAWER
	} 
});

const closeDrawer = () => ({
	type: CLOSE_DRAWER,
	payload: {
		description: CLOSE_DRAWER
	} 
});

export { openDrawer, closeDrawer };