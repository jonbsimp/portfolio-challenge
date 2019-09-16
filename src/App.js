import React, { Component } from "react";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
  Switch
} from "react-router-dom";
import {
 Navbar,
 Nav
} from 'react-bootstrap'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Skills from './pages/Skills'

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar>
            <Nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/projects">My Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
              </ul>
            </Nav>
          </Navbar>
            <Switch>
              <Route path="/about/" component={About} />
              <Route path="/contact/" component={Contact} />
              <Route path="/projects/" component={Projects} />
              <Route path="/skills/" component={Skills} />
              <Route path="/" exact component={Home} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
