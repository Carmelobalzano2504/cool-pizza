import React, { Component } from 'react';
import { GiPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { RiChatSmile2Fill } from 'react-icons/ri';
import FooterImage from '../../static/images/footer-pizza.jpg';

export default class ContactUs extends Component {
    render() {
      return (
        <div className='contact-page-wrapper'>
          <div className='contact-content'>
            <div className='contact-phone'>
              <GiPhone size={80} />
              <h1>Phone: 555-5555</h1>
            </div>

            <div className='contact-social-media'>
              <RiChatSmile2Fill size={80}/>
              <h1>Social Media: linkedin.com/in/coolpizza</h1>
            </div>
          </div>

          <div className='contact-email'>
              <MdEmail size={80}/>
              <h1>Email: coolpizza@gmail.com</h1>
            </div>
          <div className='contact-image'>
            <img src={FooterImage} alt='Footer image' />
          </div>
        </div>
      );
    }
  }
  