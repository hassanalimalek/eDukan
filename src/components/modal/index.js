import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import './modal.css'
// Dialog
import Dialog from '@material-ui/core/Dialog';
// Icons
import { AiFillCloseSquare } from 'react-icons/ai'

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Slide
import Slide from '@material-ui/core/Slide';
// Transition
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});



function Modal(props) {
    let dispatch = useDispatch();
    let [modal,setModal] = useState(props.state);
    let loginState =useSelector((state)=>state["loginReducer"]["login"])

    useEffect(()=>{
        updateModal();
    },[loginState])

    useEffect(()=>{
        setModal(props.state)
    },[props.state])

    
     // Form Submit
     let formSubmit =(e)=>{
        e.preventDefault();
        let [username,password]=[e.target.username.value,e.target.password.value]
        console.log(username,password);
        dispatch({ type: 'login',payload:{username,password} });
        updateModal("onsubmit");
    }

    let updateModal=(checkCase)=>{
        console.log("Form Submit");
        console.log("Modal State",modal)
        console.log("Login State",loginState)
        if(loginState){
            setModal(false);
        }
        if(checkCase==="onsubmit"){
            console.log("Else case !!!!!")
            const notify = () => toast.error("Wrong UserName or Password",{
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            notify();
        }
    }

   

    return (
        <div className="modalDiv">
             <Dialog
            open = {modal}
            className="dialogDiv"
            TransitionComponent={Transition}
            onBackdropClick = {()=>{props.closeModal();setModal(false)}}
            onEscapeKeyDown  = {()=>{props.closModal();setModal(false)}}
            >
                <div className="login-form">
                    <form  onSubmit={(e)=>formSubmit(e)}>
                        <AiFillCloseSquare className="crossIcon"
                        onClick={()=>{props.closeModal();setModal(false)}}
                        />
                        <div className="avatar">
                            <span className="avatar_Txt"><span>e</span>Dukan</span>
                        </div>
                        <h4 className="modal-title">Login to Your Account</h4>
                        <div className="form-group">
                            <input id="username" type="text" className="form-control"
                            placeholder="UserName" required/>
                        </div>
                        <div>
                            <input id="password" type="text" className="form-control"
                            placeholder="Password"
                            require/>
                        </div>
                        <div className="form-group small clearfix">
                            <label className="check-inline">
                                <span className="forgot-link">Forgot Password?</span>
                            </label>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block" value="Login"/>
                    </form>
                    <div className="text-center small">
                        Don't have an account.
                    </div>
                </div>
                <ToastContainer autoClose={2500}/>
            </Dialog>
        </div>
    )
}

export default Modal
