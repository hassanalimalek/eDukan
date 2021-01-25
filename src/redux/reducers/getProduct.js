import { act } from 'react-dom/test-utils';
import data from '../../data';

const getProduct = (state=data,action)=>{
    switch(action.type){
        case 'getProduct':
        
            // console.log("Get Product")
            // console.log(action.payload)
            
            let [category,id]= [action.payload.category,action.payload.id]
            // console.log(state)
            // console.log(state[category][id])
            return {...state,selectedProduct:state[category][id]}
        default:
            // console.log("Default Case")
            // console.log(state)
            // console.log(action.payload)
            return state
            
    } 
}
export default getProduct