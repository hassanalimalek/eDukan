let defaultVal ={
    login:false
}

const loginReducer = (state=defaultVal,action)=>{
    switch(action.type){
        case 'login':
            state["login"]=true;
            return {...state}
        case 'logout':
            state["login"]=false;
            localStorage.clear();
            return {...state}
        default:
            if (localStorage.user){
                state["login"]=true;
                return {...state}
            }
            return state
    }
}

export default loginReducer