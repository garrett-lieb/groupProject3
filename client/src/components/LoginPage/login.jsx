import React from 'react'
import { Link } from 'react-router-dom'




const LoginPage = () =>  {
    return (
        <div>
            <img></img>
            <h2>
                Authentication Required
            </h2>
            <form>
             <p>
                <label>
                    Username
                </label>
                <input type='text' name='username' required />
            </p>
            <p>
            <label>
                    Password
                </label>
                <input type='password' name='password' required /> 
            </p>
            <p>
                <button id='login_button' type='submit'>
                    Login
                </button>
            </p>   
            </form>
            
        </div>
    )
}

export default LoginPage