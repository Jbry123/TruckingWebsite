import React from 'react';
import './First.scss';

export default function First(props) {
 return (
   <section id="one" className="main style1">
     <div className="container">
       <div className="row 150%">
         <div className="6u 12u$(medium) custom-medium">
          <header>
             <h2 className="question"><strong className="question">What does MarriageUSA do, and what is Omiai?</strong></h2>
          </header>
          <p className="sub" >Marriage USA is the place to meet your last wife! It is professionally managed by career proven match maker, Misao Westin.
             Westin has had an in person clientele based in Japan, and San Francisco for 15 years,
              and is expanding to match woman from Japan with men in the USA!
          </p>
          <p className="sub" >
            Omiai, or known as miai, is a concept in Japan that has existed since the 16th century, 
            to establish devotion and mutual support between families and couples!
            In modern practice, it is seen as a way to date with intent to marry, comparable to 
            the more serious dating sites, the only difference being the level of personalized interaction
            you receive from Westin!
          </p>

         </div>
            <button className="button1"> Schedule a meeting!
              <a href="/" className="6u 12u$(medium) important(medium) custom-medium">
              </a>  
            </button>
            <span className="image fit">
            </span>
       </div>
     </div>
   </section>
 )
}
