import React, {useState} from 'react'
import './Login.css';
import logo from './asset/signin.png';
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="loging__logo" src={logo} />
            </Link>   
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={signIn} className="login__signinButton">Sign in</button>
                </form>
                 <p>
                    Lorem Ipsum is simply dummy text of the printing andtypesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and
                </p>   
                <button onClick={register} className="login__registrationButton">Create your Amazon Account</button>
            </div>      
        </div>
    )
}

export default Login
