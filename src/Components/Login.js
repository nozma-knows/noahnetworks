import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import './Login.css';

const signInTheme = {
    button: { backgroundColor: 'green', borderColor: 'red' }
}

function Login({ width, height }) {

    const [user, updateUser] = useState(null) 

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => updateUser(user))
            .catch(e => console.log('Error finding user: ', e))
    }, [])

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
    
    console.log('Username: ', username)
    console.log("Email: ", email)
    console.log("Phone Number: ", phoneNumber )

    return (
        <div className="Login-View">
            <div className="Login">
                <div>
                    <AmplifySignOut />
                </div>
            </div>
        </div>
    )
}

export default withAuthenticator(Login, {theme: {signInTheme}})
