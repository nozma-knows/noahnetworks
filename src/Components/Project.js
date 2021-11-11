import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { BsGithub, BsLink45Deg } from "react-icons/bs"; 

import './Project.css';

function Project({width, height}) {

    let project = ''
    const location = useLocation()
    try { 
        project = location.state.project
    } catch (err) {
        console.log('Error connecting to project: ', err)
    }
    console.log('Project:', project)

    return (
        <div className="Project-View">
            <div className="Project-Back-Button" style={ width > 620 ? {width: 600} : width > 600 ? {width: 600, marginLeft: '20pt'} : {width: '100%', marginLeft: '20pt'} }>
                <Link to={'/Projects'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', marginTop: '20pt'}}>
                    <FaArrowLeft style={{marginRight: 10}}/>Back to Projects
                </Link>
            </div>
            <div className="Project" style={ window.innerWidth > 600 ? { width: 600, margin: '20pt' } : {flex: 1, marginTop: '20pt'} }>
                
                {
                    project === 'Anonymess' ?
                        <div className="Anonymess">
                            <div className="Project-Title" style={{fontFamily: 'Righteous'}}>
                                anonymess
                            </div>
                            <div className="Project-Links">
                                <BsLink45Deg onClick={() => window.open('https://www.anonymess.app/', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                                <BsGithub onClick={() => window.open('https://github.com/nozma-knows/secret-message', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                            </div>
                            <div className="Project-Description">
                                Anonymess is a real-time anonymous message board. Users can enter a message (title and entry), that message is saved to the cloud and rendered to the website in real time.
                                Anonymess can be accessed at anonymess.app and the code for the project can be found on my Github at https://github.com/nozma-knows/secret-message
                            </div>
                            <div style={{fontWeight: 'bold'}}>Front-End</div>
                            <div className="Project-Description">
                                The front end for Anonymess is writen in Javascript using the React library. The interface of this web application is a form for writing to an AWS DynamoDB database
                                using a GraphQL API. Entries saved in the database are read and displayed to the screen from newest to oldest and cannot be deleted.
                            </div>
                            <div style={{fontWeight: 'bold'}}>Back-End</div>
                            <div className="Project-Description">
                                The back end for Anonymess is written in Javascript and set up using the AWS CLI (Amazon Web Services Command Line Interface). 
                                The back end consits of a GraphQL API that connects a DynamoDB database hosted by AWS and made accessible by the AWS console.
                            </div>
                        </div>
                    :
                    null
                }
                {
                    project === 'Noah-Networks' ?
                    <div className="Noah-Networks">
                        <div className="Project-Title" style={{fontFamily: 'Urbanist'}}>
                            noah networks
                        </div>
                        <div className="Project-Links">
                            <BsLink45Deg onClick={() => window.open('https://www.noahnetworks.com/', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                            <BsGithub onClick={() => window.open('https://github.com/nozma-knows/noahnetworks', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                        </div>
                        <div className="Project-Description">
                            Noah Networks is my personal webiste! This web application is a portal to all of my projects and is used to host my blog and create blog entries. 
                            Noah Networks is where you are now but just in case, you can find it at noahnetworks.com and the code can be found on my Github at https://github.com/nozma-knows/noahnetworks
                        </div>
                        <div style={{fontWeight: 'bold'}}>Front-End</div>
                        <div className="Project-Description">
                            The front end for Noah Networks is writen in Javascript using the React library. A sign up / sign in form allows users to log in. 
                            If a users email is in a list of approved admins they have access to an addition tab called Forms for adding blog posts. Navigation is used in the client application to link between routes.
                            These routes include: a home page, an about page, a projects page, a blog page, a contact page and a login page. Other routes can be accessed through the main pages mentioned.
                        </div>
                        <div style={{fontWeight: 'bold'}}>Back-End</div>
                        <div className="Project-Description">
                            The back end for Noah Networks is written in Javascript and set up using the AWS CLI (Amazon Web Services Command Line Interface). The main application logic lives in an AWS Lambda Funciton
                            that's's running an Express Server. The express server has routes for the HTTP methods invoked on a DynamoBD NoSQL Database used to store blog posts. To interact with the main Lambda function an API is used for
                            invoking the correct HTTP requests. Authentication is used to allow users to sign-in / sign-out and to enable administrator access for writing and deleting blog posts from the database. Finally, another Lambda Function 
                            is used to place users with admin approved emails into the admin group upon sign-in.
                        </div>
                    </div>
                    :
                    null
                }
                {
                    project === 'Renewed-Mood' ?
                    <div className="Renewed-Mood">
                        <div className="Project-Title" style={{fontFamily: 'Comfortaa'}}>
                            Renewed Mood
                        </div>
                        <div className="Project-Links">
                            {/* <BsLink45Deg onClick={() => window.open('https://www.noahnetworks.com/', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} /> */}
                            <BsGithub onClick={() => window.open('https://github.com/Milbo-LLC/Renewed-Mood', "_blank")} style={{ cursor: 'pointer', fontSize: '15pt', paddingRight: '10pt'}} />
                        </div>
                        <div className="Project-Description">
                            Renewed Mood is a mobile app for helping to track and improve your mood. You can use it to make video, audio and text entries and classify those entries based on your mood and emotions.
                            Renewed Mood uses "Plutchik's Wheel of Emotions" as a base for classifying the emotions of users. Once you complete an entry, you will be prompted to classify your mood and emotions during the entry.
                            The user can select as many of the eight emotions defined by Plutchik's Wheel of Emotions and classify the intensity of the emotion and make notes about the emotion. These eight emotions include: joy, trust, fear,
                            surprise, sadness, disgust, anger and anticipation.
                            <br /><br />
                            After an entry is completed it can be viewed on the "Entries View". If the entry is classified it's color will correspond to the mood of the user during the entry on a scale from Red to Green. Otherwise if unclassified
                            the entry will be grey. Users can find all entries they've created in the Entries View. If clicked an expanded view of the entry can be seen in which a user can play, listen or read they're entry and see details about
                            the classification of the entry.
                            <br /><br />
                            The code for Renewed Mood is open source and can be found on Github at this address: https://github.com/Milbo-LLC/Renewed-Mood.
                        </div>
                        <div style={{fontWeight: 'bold'}}>Front-End</div>
                        <div className="Project-Description">
                            Info about front end
                        </div>
                        <div style={{fontWeight: 'bold'}}>Back-End</div>
                        <div className="Project-Description">
                            Info about back end
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

// function Project() {
//     return (
//         <div className="Project-View">
//             <div className="Project">
                // <div className="Project-Back-Button">
                //     <Link to={'/Projects'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white'}}>
                //         <FaArrowLeft style={{marginRight: 10}}/>Back to Projects
                //     </Link>
                // </div>
//                 {/* <div style={{color: 'white'}}>
//                     Project Title
//                 </div> */}
//             </div>
//         </div>
//     )
// }

export default Project