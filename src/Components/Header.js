import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hub } from 'aws-amplify';
import { HiOutlineMenu,  HiOutlineX} from 'react-icons/hi';
import Modal from 'react-modal';

import checkUser from './../functions/checkUser';

import './Header.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { nav } from '@aws-amplify/ui';

function Header({ current, width, height }) {

    const [user, updateUser] = useState({})
    const [navDropDownOpen, setNavDropDownOpen] = useState(false)


    useEffect(() => {
        checkUser(updateUser)
        handleResize()
        Hub.listen('auth', (data) => {
            const { payload: { event } } = data;
            console.log('event: ', event)
            if (event === 'signIn' || event === 'signOut') checkUser(updateUser)
        })
    }, [])


    window.addEventListener('resize', handleResize)

    function handleResize() {
        if (window.innerWidth > 650) {
            setNavDropDownOpen(false)
        }
    }

    const handleClick = (action) => {
        if (action === 'Nav-DropDown') {
            setNavDropDownOpen(!navDropDownOpen)
            console.log('navDropDownOpen: ', navDropDownOpen)
        }
    }

    const SendEmail = ({ mailto, label }) => {
        return (
            <Link
                to="#"
                onClick={(e) => {
                    window.open(`${mailto}?subject=Noah Networks Inquiry`, "_blank")
                    e.preventDefault();
                }}
                style={{ textDecoration: 'none' }}
            >
                <div className="Nav-Button">
                    {label}
                </div>
            </Link>
        )
    }

    return (
        <div className="Header-View">
            <div className="Header">
                <div className="Header-Title">
                    <Link to={`/Home`} style={{ color: 'white', textDecoration: 'none' }} >
                        <div>noah networks</div>
                    </Link>
                </div>
                {
                    window.innerWidth > 705 ?
                        <div className="Nav">
                            <div className="Nav-Button-Container">
                                <Link to={'/About'} style={{ textDecoration: 'none' }}>
                                    <div style={current === 'About' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button">About</div>
                                </Link>
                            </div>
                            <div className="Nav-Button-Container">
                                <Link to={'/Projects'} style={{ textDecoration: 'none' }}>
                                    <div style={current === 'Projects'|| current === 'Project' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button">Projects</div>
                                </Link>
                            </div>
                            <div className="Nav-Button-Container">
                                <Link to={'/Blog'} style={{ textDecoration: 'none' }}>
                                    <div style={current === 'Blog' || current === 'BlogEntry' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button">Blog</div>
                                </Link>
                            </div>
                            <div className="Nav-Button-Container">
                                {
                                    user.isAuthorized ?
                                        <Link to={'/BlogForm'} style={{ textDecoration: 'none' }}>
                                            <div style={current === 'BlogForm' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button">Forms</div>
                                        </Link> :
                                        null
                                }
                            </div>
                            <div className="Nav-Button-Container">
                                <SendEmail label="Contact" mailto="mailto:n.milberger@gmail.com"/> 
                            </div>
                            <div className="Nav-Button-Container">
                                <Link to={'/Login'} style={{ textDecoration: 'none' }}>
                                    <div style={current === 'Login' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button">Login</div>
                                </Link>
                            </div>
                        </div> :
                        <div className="Nav-DropDown">
                            <div onClick={() => handleClick('Nav-DropDown')} className="Nav-DropDown-Button">
                                {
                                    navDropDownOpen === false ? 
                                        <HiOutlineMenu style={{cursor: 'pointer'}} /> :
                                        <HiOutlineX style={{cursor: 'pointer'}} />
                                }
                            </div>
                        </div>
                }
            </div>
            {
                navDropDownOpen && ( window.innerWidth < 650 ) ?
                <div className="Nav-DropDown-Menu" style={{alignItems: 'center'}}>
                    <div>
                        <Link to={'/About'} style={{ textDecoration: 'none' }}>
                            <div style={current === 'About' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button" onClick={() => handleClick('Nav-DropDown')}>About</div>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Projects'} style={{ textDecoration: 'none' }}>
                            <div style={current === 'Projects' || current === 'Project' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button" onClick={() => handleClick('Nav-DropDown')}>Projects</div>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Blog'} style={{ textDecoration: 'none' }}>
                            <div style={current === 'Blog' || current === 'BlogEntry' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button" onClick={() => handleClick('Nav-DropDown')}>Blog</div>
                        </Link>
                    </div>
                    <div>
                        {
                            user.isAuthorized ?
                                <Link to={'/BlogForm'} style={{ textDecoration: 'none' }}>
                                    <div style={current === 'BlogForm' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button" onClick={() => handleClick('Nav-DropDown')}>Forms</div>
                                </Link> :
                                null
                        }
                    </div>
                    <div>
                        <SendEmail label="Contact" mailto="mailto:n.milberger@gmail.com" /> 
                    </div>
                    <div>
                        <Link to={'/Login'} style={{ textDecoration: 'none' }}>
                            <div style={current === 'Login' ? {color: 'black', fontWeight: 'bold'} : {}} className="Nav-Button" onClick={() => handleClick('Nav-DropDown')}>Login</div>
                        </Link>
                    </div>
                </div> :
                null
            }
        </div>
    )
}

export default Header
