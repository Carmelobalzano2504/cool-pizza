import React, { Component } from 'react';
import Aboutimage from '../../static/images/about_us_image.jpg';

export default class AboutUs extends Component {
    render() {
      return (
        <div className='about-page-wrapper'>       
            <div className='about-page-background-image'>
              <img src={Aboutimage} alt="about-page-background" />
              <p className='about-page-text'>
                Cool Pizza was an idea my eight year old son invented. <br>
                </br>
                Our entire family emigrated here from Italy in the '90's. <br>
                </br>
                With extensive experience in the Restaurant business,<br>
                </br>
                I have decided to create this Website in honor of my son's <br>
                </br>
                creation. We strive to make authentic pizza with only the <br>
                </br>
                freshest ingredients. We hope you enjoy and thank you <br>
                </br>
                endlessly for your support!
              </p>
            </div>
        </div>
      );
    }
  }
  