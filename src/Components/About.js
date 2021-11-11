import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { BsGithub, BsLinkedin, BsSpotify } from "react-icons/bs"; 
import { FaSoundcloud } from "react-icons/fa"


import './About.css';

import msu from '../images/msu-logo.png'
import ti from '../images/ti-logo.png'
import textron from '../images/textron.png'
import react from '../images/react.png'
import aws from '../images/aws.png'
import arduino from '../images/arduino.png'
import ableton from '../images/ableton.jpeg'

function About({ width, height }) {

    const skills = {
        Web: ['React', 'AWS'],
        Mobile: ['React-Native', 'AWS'],
        EmbeddedDesign: ['C', 'C++', 'Python', 'Altium', 'Eagle', 'Arduino'],
        Music: ['Ableton']

    }

    return (
        <div className="About-View">
            <div className="About" style={ width > 680 ? {width: 600} : {width: '80%'} }>
                <div className="About-Title">Noah Milberger</div>
                <div className="About-Links">
                    <BsGithub onClick={() => window.open('https://github.com/nozma-knows', "_blank")} style={{ cursor: 'pointer', fontSize: '30pt', paddingRight: '20pt'}} />
                    <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/noahmilberger?trk=people-guest_people_search-card', "_blank")} style={{ cursor: 'pointer', fontSize: '30pt', paddingRight: '10pt'}} />
                </div>
                <ReactPlayer
                    className="video"
                    url= "videos/olive.MP4"
                    width="100%"
                    height="100%"
                    controls={ true }
                />
                <div className="About-Info">

                    <div className="About-Info-Item"> {/*style={ width > 680 ? {width: 600} : {width: '80%'} }> */}
                        <div className="About-Info-Item-Container">
                            <div className="About-Info-Item-Category">Hobbies</div>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={react} alt="React Logo" />
                                <div className="About-Education-Name">Full Stack Web Development</div>
                            </div>
                            <ul className="About-Education-Type">
                                {
                                    skills.Web.map((skill) => {
                                        return <li>{skill}</li>
                                    })     
                                }  
                            </ul>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={aws} alt="AWS Logo" />
                                <div className="About-Education-Name">Full Stack Mobile Development</div>
                            </div>
                            <ul className="About-Education-Type">
                                {
                                    skills.Mobile.map((skill) => {
                                        return <li>{skill}</li>
                                    })     
                                }  
                            </ul>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={arduino} alt="Arduino Logo" />
                                <div className="About-Education-Name">Embedded System Design</div>
                            </div>
                            <ul className="About-Education-Type">
                                {
                                    skills.EmbeddedDesign.map((skill) => {
                                        return <li>{skill}</li>
                                    })     
                                }  
                            </ul>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={ableton} alt="Ableton Logo" />
                                <div className="About-Education-Name">Music Production</div>
                            </div>
                            <ul className="About-Education-Type">
                                {
                                    skills.Music.map((skill) => {
                                        return <li>{skill}</li>
                                    })     
                                }  
                            </ul>
                            <div className="About-Education-Details" style={{flexDirection: 'row', justifyContent: 'center', margin: '20pt'}}>
                                <BsSpotify onClick={() => window.open('https://soundcloud.com/nozma_milbo', "_blank")} style={{ cursor: 'pointer', fontSize: '30pt', paddingRight: '40pt'}} />
                                <FaSoundcloud onClick={() => window.open('https://open.spotify.com/artist/4E8WdPsxSsD1FDzCZslzwO', "_blank")} style={{ cursor: 'pointer', fontSize: '30pt', paddingRight: '20pt'}} />
                            </div>
                            
                        </div>
                    </div>

                     <div className="About-Info-Item"> {/*style={ width > 680 ? {width: 600} : {width: '80%'} }> */}
                        <div className="About-Info-Item-Container">
                            <div className="About-Info-Item-Category">Education</div>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt'}} src={msu} alt="Michigan State University Logo" />
                                <div className="About-Education-Name">Michigan State University<br />2014 - 2019</div>
                            </div>
                            <div className="About-Education-Details">
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>BS in Electrical Engineering</div>
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>BS in Computer Engineering</div>
                            </div>
                        </div>
                    </div>

                    <div className="About-Info-Item"> {/*style={ width > 680 ? {width: 600} : {width: '80%'} }> */}
                        <div className="About-Info-Item-Container">
                            <div className="About-Info-Item-Category">Work Experience</div>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={ti} alt="Texas Instruments Logo" />
                                <div className="About-Education-Name">Texas Instruments<br />2018 - 2021</div>
                            </div>
                            <div className="About-Education-Details">
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>Field Apps Engineer (2020 - 2021)</div>
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>Field Apps Engineer Rotator (2019 - 2020)</div>
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>Field Apps Engineer Intern (Summer 2018)</div>
                            </div>
                            <div className="About-Info-Item-Title">
                                <img className="About-Education-Logo" style={{width: '40pt', height: '40pt', borderRadius: '40pt'}} src={textron} alt="Textron Logo" />
                                <div className="About-Education-Name">Textron<br />2017</div>
                            </div>
                            <div className="About-Education-Details">
                                <div className="About-Education-Details-Item" style={{paddingLeft: '45pt'}}>Electrical Engineering Intern</div>
                            </div>
                        </div>
                    </div>

            
                </div>
                {/* </div> */}
                
            </div>
        </div>
    )
}

export default About