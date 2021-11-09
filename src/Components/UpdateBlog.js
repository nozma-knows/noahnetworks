import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';

import checkUser from './../functions/checkUser';

import { API } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

const initialState = {
    title: '',
    entry: ''
}

function UpdateBlog({ width, height }) {

    const [user, updateUser] = useState({})

    useEffect(() => {
        checkUser(updateUser)
    }, [])
    const [postInfo, updatePostInfo] = useState(initialState)
    function updateForm(e) {
        const formData = {
            ...postInfo, [e.target.name]: e.target.value
        }
        updatePostInfo(formData)
    }

    async function addPost() {
        try {
            const data = {
                body: { ...postInfo }
            }
            updatePostInfo(initialState)
            await API.post('blogapi', '/entries', data)
        } catch (err) {
            console.log('Error adding item: ', err)
        }
    }

    if (user.isAuthorized) {
        return (
            <div style={styles.UpdateBlog}>
                <Input 
                    name='title'
                    onChange={updateForm}
                    value={postInfo.title}
                    placeholder='Blog Post Title'
                    style={styles.input}
                />
                <Input 
                    name='entry'
                    onChange={updateForm}
                    value={postInfo.entry}
                    placeholder='Blog Post Entry'
                    style={styles.input}
                />
                <Button
                    style={styles.button}
                    onClick={addPost}
                >
                    Add Post
                </Button>
            </div>
        )
    } else {
        return (
            <div>Do not have access.</div>
        )
    }
    
}

const styles = {
    UpdateBlog: {
        width: 400,
        margin: '20px auto'
    },
    input: {
        marginTop: 10
    },
    button: {
        marginTop: 10
    }
}

export default UpdateBlog