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
                            Renewed Mood uses "Plutchik's Wheel of Emotions" as a base for classifying the emotions of users.
                            <br /><br />
                            Renewed Mood is in it's early stages of development and a lot is planend for the future of this application. To see more details visit the Github page at the link below.
                            <br /><br />
                            The code for Renewed Mood is open source and can be found on Github at this address: https://github.com/Milbo-LLC/Renewed-Mood.
                        </div>
                        <div style={{fontWeight: 'bold'}}>Front-End</div>
                        <div className="Project-Description">
                            The front end for Renewed Mood is written in Javascript using the React-Native library. Users first log in to an existing account or create a new account through a sign-in / sign-up form.
                            Once logged into the app, the user is first taken to the video entry page. Users can navigate to audio and text entry pages as well. Video, audio and text data is saved to the cloud using
                            an Amazon S3 bucket. As entries are saved the data is automatically uploaded to the cloud. Entries can be deleted after creation, and deleteing entries will automatically delete the entry
                            from the S3 bucket. After a user finishes the video, audio or text entry they are prompted to classify their entry through a mood / emotion questionaire. If the user chooses to classify
                            their entry they will be asked to rate their mood and emotions based off of Plutchik's Wheel of Emotions. After the classification is complete, or the user declines to clasify the entry, 
                            the user is taken back to the entry form. They can navigate to the Entries View to view all of the entries they create. Entries are color coated based on the mood rating entered for the entry.
                            If the entry wasn't classified, it will show up in grey. Users can click entries to see an expanded version with more details on the entry. Users can also hold down an entry to bring up a
                            delete button for removing the entry.
                        </div>
                        <div style={{fontWeight: 'bold'}}>Back-End</div>
                        <div className="Project-Description">
                            The back end for Renewed Mood is written in Javascript and set up using the AWS CLI (Amazon Web Services Command Line Interface). The AWS CLI was used to set up an Amazon Cognito User Pool for storing
                            authenticating and storing user data. The AWS CLI was also used to set up an Amazon Simple Storage Service (Amazon S3) bucket for handling the storage of video, audio and text entries 
                            of each user. Data is planned to be used for training Machine Learning (ML) models for gathering insight about a users mood and to assist in improving the mood of users.
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