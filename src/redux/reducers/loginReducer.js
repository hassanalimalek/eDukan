import { isEqual } from 'lodash';
let defaultVal ={
    login:false
}

const loginReducer = (state=defaultVal,action)=>{
    switch(action.type){
        case 'login':
            console.log("Login!!!!")
            let correctCredentials= {username:"abc",password:"123"}
            if(isEqual(correctCredentials,action.payload)){
               state["login"]=true;
                console.log(state)
                console.log("Returning Login!!!!")
                return {...state}
            }
           
            return {...state}
        case 'logout':
            console.log("Logout Case")
            console.log("state")
            state["login"]=false;
            console.log("state")
            return {...state}
        
        default:
            console.log("Login Reducer")
            console.log(state)
            return state
    }
}

export default loginReducer