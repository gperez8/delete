import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	OPEN_PROFILE,
	CLOSE_PROFILE
} from './actionsTypes';

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

const openProfile = (event) => ({
	type: OPEN_PROFILE,
	payload: {
		description: OPEN_PROFILE,
		event: event.currentTarget
	}
})

const closeProfile = () => ({
	type: CLOSE_PROFILE,
	payload: {
		description: CLOSE_PROFILE
	}
})


export {
	openDrawer,
	closeDrawer,
	openProfile,
	closeProfile
};
