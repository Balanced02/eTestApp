import  { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

const initDrawer = 'closed'

export default drawerReducer = (state = initDrawer, action) => {
	let type = action.type;
	if(type === OPEN_DRAWER) {
		return 'open'
	} else if (type === CLOSE_DRAWER) {
		return 'closed'
	} else {
		return state
	}
}