import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        
        // Login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // Logged in successfully
            // Redirect to homepage
            history.push("/");
        })
        // Alert with message from firebase if error
        .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault();

        // Register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            // Created user and logged in now
            history.push("/");
        })
        // Alert with message from firebase if error
        .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Notice and out Interest-based Ads Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
            
 
        </div>
    )
}

export default Login
