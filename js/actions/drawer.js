import {NavigationActions} from 'react-navigation'

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export const openDrawer = () => {
	return dispatch => {
		dispatch(NavigationActions.navigate('DrawerOpen'))
		dispatch({
			type: OPEN_DRAWER
		})
	}
}

export const closeDrawer = () => {
	return {
		type: CLOSE_DRAWER
	}
}