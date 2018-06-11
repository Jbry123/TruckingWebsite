import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './First.scss';

import image_0 from '../images/pic01.jpg';

export default function First(props) {
 return (
   <section id="one" className="main style1">
     <div className="container">
       <div className="row 150%">
         <div className="6u 12u$(medium) custom-medium">
           <header className="major">
             <h2><strong>Shipping all the way from New York to Washington,
             and California to Florida!</strong></h2>
           </header>
           <p>Our drivers' have a proven track record for trusted long hauls,
              as well as local deliveries. Shoot us an email and provide details
               such as location and destination, pictures of the item(s), and your contact info!</p>
         </div>
            <button className="button1">Email Me!
              <a href="/" className="6u 12u$(medium) important(medium) custom-medium">
              </a>  
            </button>
            <span className="image fit"><img src={image_0} alt="Tony Morrison Transport" /></span>
       </div>
     </div>
   </section>
 )
}
