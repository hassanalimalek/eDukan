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
            window.localStorage.setItem('user',JSON.stringify(null))
            return {...state}
        default:
            return state
    }
}

export default loginReducer