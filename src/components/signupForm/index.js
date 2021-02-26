import React from 'react'
import { useState} from 'react'
// Icons
import { AiFillCloseSquare } from 'react-icons/ai'
// Firebase Auth
import { auth } from '../../utils/firebase'



function Index({updateDialogFunc,closeDialog,setDialogState,goToLogin}) {
    
    let [signUpErrorType,setSignUpErrorType] = useState();

    let gotoLogin = ()=>{
        document.getElementById("signUpForm").reset();
        goToLogin();
    }
 

    let signUpSubmit = (e)=>{
        e.preventDefault();
        let form = e.target;
        let [dName,email,password,confirmPassword]= [form.dName.value,form.signUpEmail.value,form.signUppassword.value,form.confirmPassword.value]
        if (password.length<6){
            setSignUpErrorType("Password is too short")
        }
        else if(password !== confirmPassword){
            setSignUpErrorType("Passwords are not the Same")
        }
        else{
            setSignUpErrorType("")
            auth.createUserWithEmailAndPassword(email,password).then((response)=>{
                console.log("Sign Up !!!!!@@@@")
                console.log(response.user)
                  
                response.user.updateProfile({
                    displayName:dName
                  })
                console.log(response.user)

                console.log(response.user)
                if(response.user.emailVerified===false){
                    auth.currentUser.sendEmailVerification().then(function() {
                         document.getElementById("signUpForm").reset();
                         goToLogin();
                         updateDialogFunc("verifyEmail")
                        }, function(error) {
                        // An error happened.
                        });
                }
            }).catch(err=>{
                if ( err.code === "auth/email-already-in-use"){
                    updateDialogFunc("emailAlreadyExist")
                }
            })
        }
 
    }
  

    return (
        <div>
              <form id="signUpForm"  onSubmit={(e)=>signUpSubmit(e)}>
                        <AiFillCloseSquare className="crossIcon"
                        onClick={()=>{closeDialog()
                            ;setDialogState(false)}}
                        />
                        <div className="avatar">
                            <span className="avatar_Txt"><span>e</span>Dukan</span>
                        </div>
                        <h4 className="modal-title">Create an Account</h4>
                        <div className="form-group">
                            <input id="dName" type="text" className="form-control"
                            placeholder="Display Name" required/>
                        </div>
                        <div className="form-group">
                            <input id="signUpEmail" type="email" className="form-control"
                            placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <input id="signUppassword" type="password" className="form-control"
                            placeholder="Password Minimum 6 Characters"
                            required/>
                        </div>
                        <div>
                            <input id="confirmPassword" type="password" className="form-control"
                            placeholder="Confirm Password"
                            required/>
                        </div>
                        <div className="mt-1">
                          <label className="text-danger font-weight-bold" htmlFor="">{signUpErrorType}</label>
                        </div>
                        <div className="mt-0 small ">
                            <label className="check-inline">
                                <span className="forgot-link">By Creating account you agree to our terms & policy.</span>
                            </label>
                        </div>
                        <input type="submit" form="signUpForm" className="btn btn-primary btn-block" value="Sign Up"/>
                        <button type="button" onClick={(e)=>gotoLogin(e)} className="btn btn-primary text-white btn-block">Login </button>
                    </form>
           </div>
    )
}

export default Index
