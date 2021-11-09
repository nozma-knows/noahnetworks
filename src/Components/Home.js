import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Home.css';
import noah from '../images/noah.jpeg'
import background from './../images/background.png'

function Home({ width, height }) {

    console.log('height: ', height*0.9*0.6)
    console.log('width: ', width*0.38*0.9)

    return (
        <div className="Home-View" style= { width > 880 ? {height: 'calc(100vh - 30pt)', justifyContent: 'center'} : {flexDirection: 'column', height: 'calc(100vh - 30pt)'} }>
            {/* <div>
                <img src={noah} className="Home-Background" style={ width > 500 ? {width: 500} : { width: '100vw'} } />
            </div> */}
            {/* <div className="Test" style={ width > 880 ? { width: 400, height: 'calc(100vh - 30pt - 20pt - 20pt)'} : { marginRight: '20pt', height: 'calc(50vh - 30pt - 20pt )' } }>
                <ReactPlayer
                    className="video"
                    url= "videos/olive.MP4"
                    width={width > 880 ? "100%" : ""}
                    height={width > 880 ? "" : "100%"}
                    style={{borderWidth: '10pt', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    // controls={ true }
                />
            </div>
            <div className="Test-2" style={ width > 880 ? { marginTop: '30pt' } : { } }>Hello</div> */}
            <div className="Home" style={ window.innerWidth > 600 ? {width: 600} : {flex: 1} }>
                <div className="Home-Title" style={ width > 650 ? {fontSize: '40px', width: 600 } : width > 550 ? { fontSize: '30px', width: 500 } : { fontSize: '25px', width: 400 } }>
                    Welcome to Noah Milberger's Personal Website!
                </div>
                <div className="Home-Main">
                    <div className="Home-Image">
                        <img className="Profile-Image" style={ width > 650 ? {width: '200pt'} : width > 550 ? {width: '175pt'} : width > 450 ? {width: '150pt'} : {width: '125pt'} } src={noah} alt="Noah" />
                    </div>
                    <div className="Home-Description-Box" style={ width > 650 ? {width: '200pt', height: '200pt', fontSize: '15pt'} : width >  550 ? {width: '175pt', height: '175pt', fontSize: '12pt'} : {width: '150pt', height: '150pt', fontSize: '10pt'}}>
                        <div style={{display: 'flex', textAlign: 'left', textJustify:'inter-character', paddingLeft: '20px', paddingRight: '20px'}} className="Home-Description-Text">
                            Hi, my name is Noah. I’m a passionate learner, creator and friend.
                            My goal is to make the world happier. I choose to do it through innovation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home