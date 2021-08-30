import React, { Component } from 'react';

import CheesePizza from '../../static/images/cheese.jpg';
import PeppPizza from '../../static/images/pepperoni.jpg';
import BBQ from '../../static/images/bbq.jpg';
import White from '../../static/images/white.jpg';
import Margherita from '../../static/images/margherita.jpg';
import Veggie from '../../static/images/veggie.jpg';
import Pineapple from '../../static/images/pineapple.jpg';
import Philly from '../../static/images/philly.jpg';
import Pretzel from '../../static/images/pretzel.jpg';

import '../style/main';

export default class Menu extends Component {
    render() {
      return (
        <div className='menu-page-wrapper'>
            <h1>Menu</h1>
            <div className='menu-container'>
              <div className='content'>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={CheesePizza} width='150' height='150' alt='Cheese Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Extra Cheesy Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$14.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={PeppPizza} width='150' height='150' alt='Pepperoni Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Loaded Pepperoni Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$16.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={BBQ} width='150' height='150' alt='BBQ Chicken Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>BBQ Chicken Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$17.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={White} width='150' height='150' alt='White Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Sauceless White Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$16.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={Margherita} width='150' height='150' alt='Traditional Margherita Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Traditional Margherita Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$15.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={Veggie} width='150' height='150' alt='Veggie Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Loaded Veggie Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$15.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={Pineapple} width='150' height='150' alt='Pineapple Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Pineapple Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$15.99</div>
                    </div>

                  </div>
                </div>
                
                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={Philly} width='150' height='150' alt='Philly Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Philly Pizza</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$17.99</div>
                    </div>

                  </div>
                </div>

                <div className='card-container'>
                  <div className='card-container-content'>

                    <div className='card-front'>
                      <img src={Pretzel} width='150' height='150' alt='Pretzel Pizza' />
                    </div>
                    <div className='card-back'>
                      <div className='description'>Pretzel Crust Pizza / Choose two toppings</div>
                      <div className='size'>16 inch</div>
                      <div className='price'>$18.99</div>
                    </div>

                  </div>
                </div>






              </div>

            </div>
        </div>
      );
    }
  }