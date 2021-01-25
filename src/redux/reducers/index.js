import rootReducer from './rootReducer'
import { combineReducers } from 'redux'
import getProduct from './getProduct'
import cartReducer from './cartReducer'

export default combineReducers({
    getProduct,
    rootReducer,
    cartReducer
    
})