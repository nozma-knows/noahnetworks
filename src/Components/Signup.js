import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { FaArrowLeft } from 'react-icons/fa';
import { BsEyeFill, BsEyeSlashFill} from "react-icons/bs";

import './Signup.css';

const initialSignupState = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    authenticationCode: '',
}

function Signup({ width, height }) {

    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false)
    const [credentials, updateCredentials] = useState(initialSignupState)
    const [confirmSignup, setConfirmSignup] = useState(false)

    function updateSignupForm(e) {
        const signupData = {
            ...credentials, [e.target.name]: e.target.value
        }
        updateCredentials(signupData)
        console.log('Authentication Code: ', credentials.authenticationCode)
    }

    const handleAWSSignUp = async() => {
        try {
            const { user } = await Auth.signUp({
                username: credentials.username,
                password: credentials.password,
                attributes: {
                    email: credentials.email,
                    phone_number: `+1${credentials.phoneNumber}`,
                }
            })
            setConfirmSignup(true)
            console.log('User successfully signed up: ', user)
        } catch (error) {
            setConfirmSignup(false)
            console.log('Error signing up: ', error)
        }
        updateCredentials({
            username: credentials.username,
            password: '',
            email: '',
            phoneNumber: '',
            authenticationCode: '',
        })
    }

    const handleAWSConfirmSignUp = async () => {
        const username = credentials.username
        const authenticationCode = credentials.authenticationCode
        try {
            const { user } = await Auth.confirmSignUp(username, authenticationCode)
            alert(`Confirmed sign up!: ${user}`)
            history.push('/Login')
            updateCredentials(initialSignupState)
            console.log('User successfully confirmed sign up: ', user)
        } catch (error) {
            alert(`Error confirming sign up: ${error}`)
            console.log('Error confirming sign up: ', error)
        }
    }

    return (
        
        <div className="Signup-View">
            <div className="Signup-Back-Button" style={ width > 620 ? {width: 600} : width > 600 ? {width: 600, marginLeft: '20pt'} : {width: '100%', marginLeft: '20pt'} }>
                <Link to={'/Login'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', marginTop: '20pt'}}>
                    <FaArrowLeft style={{marginRight: 10}}/>Back to Login
                </Link>
            </div>
            {
                confirmSignup ? 
                    <div className="Signup" style={ width > 680 ? {width: 600} : {width: '80%'} }>
                        <div className="Signup-Title">Confirm Sign Up</div>
                        <input 
                            name='username'
                            onChange={updateSignupForm}
                            value={credentials.username}
                            placeholder="Username"
                            className="Signup-Input"
                        />
                        <input 
                            name='authenticationCode'
                            onChange={updateSignupForm}
                            value={credentials.authenticationCode}
                            placeholder="Authentication Code"
                            className="Signup-Input"
                        />
                        <Button
                            onClick={() => handleAWSConfirmSignUp()}
                            className="Signup-Button"
                        >
                            Confirm
                        </Button>
                    </div>:
                    <div className="Signup" style={ width > 680 ? {width: 600} : {width: '80%'} }>
                        <div className="Signup-Title">Sign Up</div>
                        <input 
                            name='username'
                            onChange={updateSignupForm}
                            value={credentials.username}
                            placeholder="Username"
                            className="Signup-Input"
                        />

                        <div className="Signup-Password-Input-Container">
                            <input
                                type={ showPassword ? "normal" : "password" }
                                name='password'
                                onChange={updateSignupForm}
                                value={credentials.password}
                                placeholder="Password"
                                className="Signup-Password-Input"                        
                            />
                            {
                                showPassword ? 
                                    <BsEyeFill 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="Signup-Password-Input-Eye" 
                                    /> :
                                    <BsEyeSlashFill 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="Signup-Password-Input-Eye" 
                                    />
                            }
                        </div>

                        <input 
                            name='email'
                            onChange={updateSignupForm}
                            value={credentials.email}
                            placeholder="Email"
                            className="Signup-Input"
                        />

                        <input 
                            name='phoneNumber'
                            onChange={updateSignupForm}
                            value={credentials.phoneNumber}
                            placeholder="Phone Number"
                            className="Signup-Input"
                        />

                        <Button
                            onClick={() => handleAWSSignUp()}
                            className="Signup-Button"
                        >
                            Sign Up
                        </Button>

                    </div>
            }
        </div>
    )
}

export default Signup