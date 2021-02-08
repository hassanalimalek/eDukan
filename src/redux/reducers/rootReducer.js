import data from '../../data';


const rootReducer = (state=data,action)=>{
    switch(action.type){
        case 'intialProducts':
            return [action.payload]
        default:
            return state
    }
}

export default rootReducer