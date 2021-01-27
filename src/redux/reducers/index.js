import rootReducer from './rootReducer'
import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'
import orderReducer from './orderReducer'

export default combineReducers({
    rootReducer,
    cartReducer,
    loginReducer,
    orderReducer
    
})