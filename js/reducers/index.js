import { combineReducers } from 'redux'

import drawer from './drawer'
import feedback from './feedback'
import challenge from './challenges'

export default combineReducers({
  drawer,
  feedback,
  challenge,
})
