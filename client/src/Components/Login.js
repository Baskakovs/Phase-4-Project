//NOTES
//MISSING SOME KEYS


//Importing dependencies
import React, {useState, useEffect} from 'react'
// import uuid from 'react-uuid'
//Importing components
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import duck from '../duck.webp'
import Errors from './Errors'

function Login(){

    const [errors, setErrors] = useState([])//errors from the front-end and the back-end from the login and signup forms
    const [login, setLogin] = useState(true)

    useEffect(()=>{setErrors()},[login])
    
    return(
        <div className="container two-col height-100 align-content-center">
            <div className="m-a">
                {login? <LoginForm setErrors={setErrors}/> : <SignupForm 
                setErrors={setErrors}/>}
                <div className="cntr">
                    <button onClick={()=>setLogin(!login)} className="login-btn">{login ? "Signup" : 
                    "Login"}
                    </button>
                    <Errors errors={errors}/>
                </div>
            </div>
            <div className="m-a">
                <img src={duck} alt={"McDuck"}/>
            </div>
        </div>
    )
}
export default Login