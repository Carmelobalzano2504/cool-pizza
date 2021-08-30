import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Menu from './Menu';
import Home from './Home';

import '../style/main';



export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <div className='landing-page-wrapper'>     
          <Router>
            <Navbar />            
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/aboutUs' component={AboutUs} />
              <Route path='/contactUs' component={ContactUs} />
              <Route path='/menu' component={Menu} />
            </Switch>            
          </Router>
        </div>
      </div>
    );
  }
}
