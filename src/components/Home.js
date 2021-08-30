import React from 'react';
import HomeImage from '../../static/images/homeimage.jpg';

function Home() {
    return (
        <div className="home-wrapper">
            <div className='landing-page-body'>
              <img src={HomeImage} alt='Home image' />
              <p className='home_image_text'>
                Home-made Italian Pizza <br />
                <br />
                Made Fresh Daily! <br />
                <br />
                Ask about our Catering!
              </p>           
            </div>
        </div>
    )
}


export default Home;