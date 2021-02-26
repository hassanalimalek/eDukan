import rootReducer from './rootReducer'
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import coverPageReducer from './coverPageReducer'
export default combineReducers({
    rootReducer,
    coverPageReducer,
    cartReducer,
    loginReducer,    
})