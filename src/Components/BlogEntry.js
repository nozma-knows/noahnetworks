import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { FaArrowLeft } from 'react-icons/fa'

import './BlogEntry.css';

import noah from '../images/noah.jpeg'


function BlogEntry() {

    const location = useLocation()
    const post = location.state.post

    return (
        <div className="BlogEntry-View">
            <div className="BlogEntry" style={ window.innerWidth > 600 ? {width: 600} : {flex: 1} }>
                <div className="BlogEntry-Back-Button">
                    <Link to={'/Blog'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white'}}>
                        <FaArrowLeft style={{marginRight: 10}}/>Back to Blog
                    </Link>
                </div>
                <div className="BlogEntry-Post">
                    <div className="BlogEntry-Details">
                        <div className="BlogEntry-Type">{post.type}</div>
                        <div className="BlogEntry-Date">{`${moment(post.date).format('LL')}`}</div>
                    </div>
                    <div className="BlogEntry-Title">{post.title}</div>
                    <div className="BlogEntry-Author">
                        {
                            post.author === 'noah' ?
                                <img className="BlogEntry-Image" src={noah} alt="Noah" /> :
                                null
                        }
                        <div className="BlogEntry-Author-Text">{post.author === 'noah' ? 'Noah Milberger' : post.author}</div>
                    </div>
                    <div className="BlogEntry-Entry">
                        <ReactMarkdown 
                            children={post.entry}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogEntry