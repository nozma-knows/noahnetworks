import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BsEyeFill, BsEyeSlashFill} from "react-icons/bs";

import './Login.css';

const { TextArea } = Input

const initialLoginState = {
    username: '',
    password: '',
}

const signInTheme = {
    button: { backgroundColor: 'green', borderColor: 'red' }
}

function Login({ width, height }) {

    const [user, updateUser] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [credentials, updateCredentials] = useState(initialLoginState)
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => updateUser(user))
            .catch(e => console.log('Error finding user: ', e))
        checkSignedIn()
    }, [])

    async function checkSignedIn() {
        try {
            await Auth.currentAuthenticatedUser()
            setSignedIn(true)
        } catch (err) {
            setSignedIn(false)
        }
    }

    function updateLoginForm(e) {
        const loginData = {
            ...credentials, [e.target.name]: e.target.value
        }
        updateCredentials(loginData)
    }

    let isAdmin = false

    if (user) {
        const { signInUserSession: {idToken: {payload} } } = user
        console.log('Payload: ', payload)
        if (
            payload['cognito:groups'] &&
            payload['cognito:groups'].includes('Admin')
        ) {
            isAdmin = true
        }
    }
    const username = '', email = '', phoneNumber = ''
    try {
        const { username } = user
        const { email, phone_number: phoneNumber } = user.attributes
    } catch (err) {
        console.log("Error getting user info: ", err)
    }

    const handleAWSSignIn = async() => {
        try {
            await Auth.signIn(credentials.username, credentials.password)
            setSignedIn(true)
        } catch(error) {
            console.log('Error signing in: ', error)
        }
        updateCredentials(initialLoginState)
    }

    const handleAWSSignOut = async() => {
        setSignedIn(false)
    }

    // return (
    //     <div className="Login-View">
    //         <div className="Login">
    //             <div>
    //                 <AmplifySignOut />
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div className="Login-View">
            {
                signedIn ?
                    <AmplifySignOut style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleAWSSignOut()} /> :
                    <div className="Login" style={ width > 680 ? {width: 600} : {width: '80%'} }>
                        <div className="Login-Title">Log In</div>
                        <input 
                            name='username'
                            onChange={updateLoginForm}
                            value={credentials.username}
                            placeholder="Username"
                            className="Input"
                            icon={{ name: 'search', circular: true }}
                        />

                        <div className="Login-Password-Input">
                            <input
                                type={ showPassword ? "normal" : "password" }
                                name='password'
                                onChange={updateLoginForm}
                                value={credentials.password}
                                placeholder="Password"
                                className="Password-Input"                        
                            />
                            {
                                showPassword ? 
                                    <BsEyeFill 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="Password-Input-Eye" 
                                    /> :
                                    <BsEyeSlashFill 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="Password-Input-Eye" 
                                    />
                            }
                        </div>
                        <div className="Login-Forgot-Password">Forgot Password</div>
                        <div className="Login-Buttons">
                            <Button
                                onClick={() => handleAWSSignIn()}
                                className="Button"
                            >
                                Sign In
                            </Button>

                            <Link 
                                to={{ 
                                    pathname: "/Signup", 
                                }} 
                                style={{ textDecoration: 'none', color: 'white' }}
                            >
                                <Button
                                    // onClick={addItem}
                                    className="Button"
                                    style={{marginLeft: '20pt'}}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
            }
        </div>
        
    )
}

export default Login
// export default withAuthenticator(Login, {theme: {signInTheme}})
