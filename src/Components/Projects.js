import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css';

import { BsGithub, BsLink45Deg } from "react-icons/bs"; 

function Projects({ width, height }) {
    return (
        <div className="Projects">
            <div className="Projects-Title">
                Projects
            </div>

            <div className="Project-Item" style={ window.innerWidth > 580 ? {width: 500} : {width: '80%'} }>
                
                <div className="Project-Item-Links">
                    <BsLink45Deg onClick={() => window.open('https://www.anonymess.app/', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt', marginBotton: '20pt'}} />
                    <BsGithub onClick={() => window.open('https://github.com/nozma-knows/secret-message', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt', marginBotton: '20pt'}} />
                </div>
                <Link 
                    to={{ 
                        pathname: "/Project", 
                        state: { project: 'Anonymess' }
                    }} 
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className="Project-Item-Info">
                        <div className="Project-Item-Logo-Container-Anonymess">
                            <div className="Project-Item-Logo" style={{fontFamily: 'Righteous', fontSize: '60pt', marginBottom: '11pt'}}>
                                a
                            </div>
                        </div>
                        <div className="Project-Item-Details">
                            <div className="Project-Item-Name" style={{fontFamily: 'Righteous'}}>anonymess</div>
                            <div className="Project-Item-Description" style={ window.innerWidth > 580 ? {fontSize: 15} : {fontSize: 11} }>Real-time Anonymous Message Board Web App</div>
                        </div>
                    </div>
                </Link>
                <div className="Project-Item-Links" />
                
            </div>

            <div className="Project-Item" style={ window.innerWidth > 580 ? {width: 500} : {width: '80%'} }>
                
                <div className="Project-Item-Links">
                    <BsLink45Deg onClick={() => window.open('https://www.noahnetworks.com/', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                    <BsGithub onClick={() => window.open('https://github.com/nozma-knows/noahnetworks', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                </div>
                <Link 
                    to={{ 
                        pathname: "/Project", 
                        state: { project: 'Noah-Networks' }
                    }} 
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className="Project-Item-Info">
                        <div className="Project-Item-Logo-Container-Noah-Networks">
                            <div className="Project-Item-Logo" style={{fontFamily: 'Urbanist', fontSize: '30pt'}}>
                                nn
                            </div>
                        </div>
                        <div className="Project-Item-Details">
                            <div className="Project-Item-Name" style={{fontFamily: 'Urbanist'}}>noah networks</div>
                            <div className="Project-Item-Description" style={ window.innerWidth > 580 ? {fontSize: 15} : {fontSize: 11} }>Personal Website and Blog</div>
                        </div>
                    </div>
                </Link>
                <div className="Project-Item-Links" />
                
            </div>

            <div className="Project-Item" style={ window.innerWidth > 580 ? {width: 500} : {width: '80%'} }>
                
                <div className="Project-Item-Links">
                    <BsGithub onClick={() => window.open('https://github.com/Milbo-LLC/Renewed-Mood', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                </div>
                <Link 
                    to={{ 
                        pathname: "/Project", 
                        state: { project: 'Renewed-Mood' }
                    }} 
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <div className="Project-Item-Info">
                        <div className="Project-Item-Logo-Container-Renewed-Mood">
                            <div className="Project-Item-Logo" style={{fontFamily: 'Comfortaa', fontSize: '30pt'}}>
                                RM
                            </div>
                        </div>
                        <div className="Project-Item-Details">
                            <div className="Project-Item-Name" style={{fontFamily: 'Comfortaa'}}>Renewed Mood</div>
                            <div className="Project-Item-Description" style={ window.innerWidth > 580 ? {fontSize: 15} : {fontSize: 11} }>Mood and Emotion Tracking Journal Mobile App</div>
                        </div>
                    </div>
                </Link>
                <div className="Project-Item-Links" />
                
            </div>

        </div>
    )
}

export default Projects
