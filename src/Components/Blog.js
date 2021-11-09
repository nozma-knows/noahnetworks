import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import checkUser from './../functions/checkUser';
import Loading from './Loading';

import './Blog.css';
import noah from '../images/noah.jpeg'

function Blog({ width, height }) {

    const [state, setState] = useState({posts: [], loading: true})
    const [user, updateUser] = useState({})

    let didCancel = false
    useEffect(() => {
        getPosts()
        checkUser(updateUser)
        return () => didCancel = true
    }, [])

    async function getPosts() {
        console.log('User: ', user)
        const data = await API.get('noahnetworksblogdbapi', '/posts')
        const sortedData = [...data.data.Items.sort((a, b) => b.date - a.date)]
        console.log('data: ', data)
        if (didCancel) return
        setState({
            posts: sortedData, loading: false
        })
    }

    async function deleteItem(id) {
        try {
            const posts = state.posts.filter(p => p.id !== id)
            setState({ ...state, posts })
            await API.del('noahnetworksblogdbapi', '/posts', { body: { id } })
            console.log('successfully deleted item')
        } catch (err) {
            console.log('error: ', err)
        }
    }

    function getFirstSentence(entry) {
        try {
            return entry.split('#')[2].split(/[.!?]/g)[0] + entry.split(/(?=[.!?])/g)[1].charAt(0)
            // return entry.split(' # ')[0].split(/[.!?]/g)[0] + entry.split(/(?=[.!?])/g)[1].charAt(0)
        } catch (err) {
            return entry
        }
    }

    return (
        <div className="Blog">
            <div className="Blog-Title">
                Noah's Narrative
            </div>
            {
                state.loading ? 
                    <Loading /> :
                    <div className="Blog-Table">                
                        {
                            state.posts.map(post => (
                                <div className="Blog-Item" key={post.id}>
                                    <div className="Blog-Item-Author">
                                        {
                                            post.author === 'noah' ?
                                                <img style={{width: 60, height: 60, borderRadius: 60, marginBottom: 10}} src={noah} alt="Noah" /> :
                                                null
                                        }
                                        <div className="Blog-Item-Author-Text">{post.author === 'noah' ? 'Noah Milberger' : post.author}</div>
                                    </div>
                                    <div className="Blog-Item-Post">
                                        <div className="Blog-Item-Details">
                                            <div className="Blog-Item-Type">{`${post.type}`}</div>
                                            <div className="Blog-Item-Date">{`${moment(post.date).format('LL')}`}</div>
                                        </div>
                                        <div className="Blog-Item-Content">
                                            <div className="Blog-Item-Title">{`${post.title}`}</div>
                                            <div className="Blog-Item-Entry">
                                                {`${getFirstSentence(post.entry)}`}
                                            </div>
                                            <div className="Blog-Item-Read-More-Button">
                                                <Link 
                                                    to={{ 
                                                        pathname: "/BlogEntry", 
                                                        state: { post: post }
                                                    }} 
                                                    style={{ textDecoration: 'none', color: 'white' }}
                                                >
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        user.isAuthorized ? 
                                        <div className="Blog-Item-Delete" onClick={() => deleteItem(post.id)}>
                                            Delete
                                        </div> :
                                        null
                                    }
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Blog


// import React, { useState, useEffect } from 'react';
// import { API } from 'aws-amplify';
// import { Input, Button, List } from 'antd';
// import checkUser from './../functions/checkUser';
// import './Blog.css';

// const initialFormState = {
//     title: '',
//     entry: ''
// }

// function Blog({ width, height }) {

//     const [state, setState] = useState({ posts: [], loading: true })
//     const [user, updateUser] = useState({})
//     const [postInfo, updatePostInfo] = useState(initialFormState)

//     let didCancel = false

//     useEffect(() => {
//         getPosts()
//         checkUser(updateUser)
//         return () => didCancel = true
//     }, [])

//     function updateForm(e) {
//         const formData = {
//             ...postInfo, [e.target.name]: e.target.value
//         }
//         updatePostInfo(formData)
//     }

//     async function addPost() {
//         try {
//             const data = {
//                 body: { ...postInfo }
//             }
//             updatePostInfo(initialFormState)
//             await API.post('blogapi', '/entries', data)
//         } catch (err) {
//             console.log('Error adding item: ', err)
//         }
//     }

//     async function getPosts() {
//         const data = await API.get('blogapi', '/entries')
//         console.log('data: ', data)
//         if (didCancel) return
//         setState({
//             posts: data.data.Items, loading: false
//         })
//     }

//     async function deletePost(id) {
//         try {
//             const posts = state.posts.filter(p => p.id !== id)
//             setState({ ...state, posts })
//             await API.del('blogapi', '/entries', { body: { id } })
//             console.log('successfully deleted post.')
//         } catch (err) {
//             console.log('Error deleting post: ', err)
//         }
//     }

//     return (
//         <div>
//             <div>
//                 {
//                     user.isAuthorized ? 
//                         <div style={styles.UpdateBlog}>
//                             <Input 
//                                 name='title'
//                                 onChange={updateForm}
//                                 value={postInfo.title}
//                                 placeholder='Blog Post Title'
//                                 style={styles.input}
//                             />
//                             <Input 
//                                 name='entry'
//                                 onChange={updateForm}
//                                 value={postInfo.entry}
//                                 placeholder='Blog Post Entry'
//                                 style={styles.input}
//                             />
//                             <Button
//                                 style={styles.button}
//                                 onClick={addPost}
//                             >
//                                 Add Post
//                             </Button>
//                         </div> :
//                         <div></div>
//                 }
//             </div>
        
//             <div className="Blog">
//                 <List 
//                     itemLayout="horizontal"
//                     dataSource={state.posts}
//                     loading={state.loading}
//                     renderItem={ item => (
//                         <List.Item
//                             actions={ user.isAuthorized ? 
//                                 [<p onClick={() => deletePost(item.id)} key={item.id}>Delete</p>] :
//                                 null
//                             }
//                         >
//                             <List.Item.Meta 
//                                 title={item.title}
//                                 description={item.entry}
//                             />
//                         </List.Item>
//                     ) }
//                 />
//             </div>
//         </div>
//     )
// }

// const styles = {
//     UpdateBlog: {
//         width: 400,
//         margin: '20px auto'
//     },
//     input: {
//         marginTop: 10
//     },
//     button: {
//         marginTop: 10
//     }
// }


// export default Blog
