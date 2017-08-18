import {
	SHOW_INFO,
	CLEAR_INFO,
	SHOW_ERROR,
	CLEAR_ERROR,
} from '../actions/feedback'

const initState = {
	info: null,
	error: null,
}

export default feedbackReducer = (state = initState, action) => {
	switch (action.type) {
		case SHOW_INFO:
			return {
				...state,
				info: action.info
			}
			
		case CLEAR_INFO:
			return {
				...state,
				info: null
			}

		case SHOW_ERROR:
			return {
				...state,
				error: action.error
			}

		case CLEAR_ERROR:
			return {
				...state,
				error: null
			}
	
		default:
			return state
	}
}