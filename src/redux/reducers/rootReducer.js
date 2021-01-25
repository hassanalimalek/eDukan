import data from '../../data';

const rootReducer = (state=data,action)=>{
    switch(action.type){
        
        default:
            // console.log("Default Case")
            // console.log(state.shoes[0])
            return state
    }
}

export default rootReducer