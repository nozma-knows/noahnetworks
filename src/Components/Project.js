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
                </Link>Z
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
                                Anonymess is a real-time anonymous message board. Users can enter a message which includes a title and entry, and that message is saved to the cloud and rendered to the website in real time.
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
                            Noah Networks is my personal webiste! I use this web application as a portal to all of my projects and my personal blog.
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
                            After an entry is completed it can be viewed on the "Entries View". If the entry is classified it's color will correspond to the mood of the user during the entry on a scale from Red to . Otherwise if unclassified
                            the entry will be grey. Users can find all entries they've created in the Entries View. If clicked an expanded view of the entry can be seen in which a user can play, listen or read they're entry and see details about
                            the classification of the entry.
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