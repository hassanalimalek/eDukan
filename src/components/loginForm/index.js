import React from 'react'
// Icons
import { AiFillCloseSquare } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
// Firebase Auth
import { auth } from '../../utils/firebase'


function Index({updateDialogFunc,closeDialog,setDialogState,goToSignUp}) {

    let dispatch = useDispatch();

    // Form Submit
    let loginSubmit =(e)=>{
        e.preventDefault();
        let [username,password]=[e.target.username.value,e.target.password.value]
        auth.signInWithEmailAndPassword(username,password).then((response)=>{
            if (auth.currentUser.emailVerified){
                localStorage.clear();
                window.localStorage.setItem('user',JSON.stringify(auth.currentUser))
                dispatch({ type: 'login',payload:"allow" });
                updateDialogFunc("onsubmit");
            }
            else {
                updateDialogFunc("emailNotVerfied")
            }   

        }).catch(err=>{
            updateDialogFunc("wrongCredentials")
            }
        )
    }

    return (
        <div>
             <form id = "loginForm"  onSubmit={(e)=>loginSubmit(e)}>
                        <AiFillCloseSquare className="crossIcon"
                        onClick={()=>{closeDialog(); setDialogState(false)}}
                        />
                        <div className="avatar">
                            <span className="avatar_Txt"><span>e</span>Dukan</span>
                        </div>
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input id="username" type="text" className="form-control"
                            placeholder="UserName" required/>
                        </div>
                        <div className="mb-4">
                            <input id="password" type="text" className="form-control"
                            placeholder="Password"
                            required/>
                        </div>
                        {/* <div className="form-group small clearfix">
                            <label className="check-inline">
                                <span className="forgot-link">Forgot Password?</span>
                            </label>
                        </div> */}
                        <input type="submit" form="loginForm" className="btn btn-primary btn-block" value="Login"/>
                    </form>
                    <div className="text-center small" style={{cursor:"pointer"}} onClick={(e)=>goToSignUp()}>
                        Don't have an account.
                    </div>
        </div>
    )
}

export default Index
