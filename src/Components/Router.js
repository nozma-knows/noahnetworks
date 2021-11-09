import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import ScrollToTop from './../functions/ScrollToTop';
import './Router.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import Blog from './Blog';
import BlogForm from './BlogForm';
import BlogEntry from './BlogEntry';
import Login from './Login';

function Router() {

  const [current, setCurrent] = useState('Home')

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
      function handleResize() {
          setWidth(window.innerWidth)
          setHeight(window.innerHeight)
      }
      window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () => window.removeEventListener('hashchange', setRoute)
  }, [])

  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length-1]
    setCurrent(pathname ? pathname: 'Home')
  }

  return (
    <div className="Router">
      <HashRouter>
        <Header current={current} width={width} height={height*0.1} />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30pt'}}>
          <ScrollToTop />
          <Switch>
            <Route exact path="/Home"><Home width={width} height={height} /></Route>
            <Route exact path="/About"><About width={width} height={height} /></Route>
            <Route exact path="/Projects"><Projects width={width} height={height} /></Route>
            <Route exact path="/Project"><Project width={width} height={height} /></Route>
            <Route exact path="/Blog"><Blog width={width} height={height} /></Route>
            <Route exact path="/BlogForm"><BlogForm width={width} height={height} /></Route>
            <Route exact path="/BlogEntry"><BlogEntry width={width} height={height} /></Route>
            <Route exact path="/Login"><Login width={width} height={height} /></Route>
            <Route><Home width={width} height={height} /></Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default Router;
