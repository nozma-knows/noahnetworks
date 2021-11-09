import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Input, Button } from 'antd';
import API from '@aws-amplify/api';

import checkUser from './../functions/checkUser';

import './BlogForm.css';

const { TextArea } = Input
const initialFormState = {
    type: '',
    title: '',
    entry: '',
}

function BlogForm({ width, height }) {

    const [user, updateUser] = useState({})
    const [post, updatePost] = useState(initialFormState)

    useEffect(() => {
        checkUser(updateUser)
    }, [])

    function updateForm(e) {
        const formData = {
            ...post, [e.target.name]: e.target.value
        }
        updatePost(formData)
    }

    async function addItem() {
        if (post.title && post.entry) {
            try {
                const data = {
                    body: { ...post, author: user.username, date: Date.now() },
                }
                updatePost(initialFormState)
                await API.post('noahnetworksblogdbapi', '/posts', data)
            } catch (err) {
                console.log('Error adding item: ', err)
            }
        }
    }

    return (
        <div className="BlogForm-View">
            <div className="BlogForm">
                <div className="BlogForm-Title">
                    Blog Form
                </div>
                <TextArea 
                    name='type'
                    onChange={updateForm}
                    value={post.type}
                    placeholder="Blog Type"
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    className="Input"
                />
                <TextArea 
                    name='title'
                    onChange={updateForm}
                    value={post.title}
                    placeholder="Blog Title"
                    autoSize={{ minRows: 1, maxRows: 4 }}
                    className="Input"
                />
                <TextArea  
                    name='entry'
                    onChange={updateForm}
                    value={post.entry}
                    placeholder='Blog Entry - Writen in Markdown language'
                    autoSize={{ minRows: 12, maxRows: 20 }}
                    className="Input"
                    style={{ marginBottom: '20pt'}}
                />
                <div className="BlogForm-Entry-Display">
                    <div className="BlogForm-Entry-Title"style={{ display: 'flex', justifyContent: 'center', padding: '10pt', fontFamily: 'Urbanist', fontSize: '15pt', color: 'white', borderTopLeftRadius: '5pt', borderTopRightRadius: '5pt', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>Blog Preview</div>
                    <div className="Markdown-Text">
                        <ReactMarkdown 
                            children={post.entry} 
                        />
                    </div> 
                </div>
                <Button
                    onClick={addItem}
                    className="Button"
                >
                    Post Entry
                </Button>
            </div>
        </div>
    )
}

const styles = {
    input: {
        margin: '10pt',
    },
    button: {
        marginBottom: '10px',
        alignSelf: 'center',
    }
}

export default BlogForm