import React from 'react'
import { useSelector} from 'react-redux'
import { useState,useEffect } from 'react'
import './dialog.css'
import LoginForm from '../loginForm'
import SignUpForm from '../signupForm'

// Dialog
import Dialog from '@material-ui/core/Dialog';


// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Slide
import Slide from '@material-ui/core/Slide';
// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});



function Index(props) {

    let [dialogState,setDialogState] = useState(props.state);
    let loginState =useSelector((state)=>state["loginReducer"]["login"])

    let [loginDialogState,setloginDialogState] = useState(true);
    let [signupDialogState,setSignupDialogState] = useState (false);

    // console.log("Dialog State",dialogState)
    // console.log("Login State",loginState)
  
    useEffect(()=>{
        setDialogState(props.state)
    },[props.state])


    let goToLogin = (e)=>{
        setloginDialogState(true);
        setSignupDialogState(false);
    }

    let goToSignUp = ()=>{
        setloginDialogState(false);
        setSignupDialogState(true);
    }

    let updateDialogFunc=(checkCase)=>{
        if(loginState){
            setDialogState(false);
        }
        if (checkCase === "wrongCredentials"){
            const notify = () => toast.error("Wrong UserName or Password",{
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            notify();
        }
        if (checkCase === "emailNotVerfied"){
            const notify = () => toast.error("Please Verify your Email Address",{
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            notify();
        }
        if (checkCase === "emailAlreadyExist"){
            const notify = () => toast.error("Email Already Exists",{
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            notify();
        }
        if (checkCase === "verifyEmail"){
            const notify = () => toast.dark("Verification Email Sent",{
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            notify();
        }
    }

    useEffect(()=>{
        updateDialogFunc(); 
    },[loginState])// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="dialogDiv">
             <Dialog
            open = {dialogState}
            className="dialogDiv"
            TransitionComponent={Transition}
            onBackdropClick = {()=>{props.closeDialog();setDialogState(false)}}
            onEscapeKeyDown  = {()=>{props.closeDialog();setDialogState(false)}}
            >
                <div className={`login-form ${loginDialogState ? 'd-block':'d-none' }`}>

                   <LoginForm closeDialog={props.closeDialog} updateDialogFunc={updateDialogFunc} 
                   setDialogState={setDialogState} goToSignUp={goToSignUp}
                   />

                </div>
                <div className={`login-form ${signupDialogState ? 'd-block':'d-none' }`}>
                    <SignUpForm closeDialog={props.closeDialog}  updateDialogFunc={updateDialogFunc} setDialogState={setDialogState} goToLogin={goToLogin} />
                </div>
                <ToastContainer autoClose={3000}/>
            </Dialog>
        </div>
    )
}

export default Index
