import React from 'react';
import './Second.scss';
import Step1 from '../images/Step1.png';
import Step2 from '../images/Step2.png';
import Step3 from '../images/Step3.png';
import Step4 from '../images/Step4.png';
import City from '../images/cityScape1.jpg';

export default function Second(props) {
  return (
    <section id="two" >

      <div className="6u 12u$(medium) custom-medium">
        <header className="StepParent">
    <img className="Leafs" src={City} alt="MarriageUSA" />
          <div>
            <img className="Step1" src={Step1} alt="MarriageUSA"/>
            <p className="StepOne"> Step 1: Sign up for free
            <br />
            <br /> *for limited time!
            </p>
          </div>
          <div>
          <img className="Step2" src={Step2} alt="MarriageUSA"/>
            <p className="StepTwo"> Step 2: Misao arranges a multitude
             of matches for you to contact personally!
            </p>
          </div>
          <div >
          <img className="Step3" src={Step3} alt="MarriageUSA"/>
            <p className="StepThree"> Step 3: Connect with your matches
             and arrange a meeting date!
            </p>
          </div>
          <div >
          <img src={Step4} className="Step4" alt="MarriageUSA"/>
            <p className="StepFour"> Step 4: Get to know each other through a period of vacation visits and communication. Live happily ever after!
            </p>
          </div>
        </header>
      </div>
    </section>

  )
}
