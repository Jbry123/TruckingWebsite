import React from 'react';
import './Header.scss';
import EmailForm from '../components/EmailForm';
import Logo from '../images/MarriageUSA.png';
import Clouds from '../images/Clouds.png';


//////////////////////////////////////////
////////// # Notes #
////////// 1. maybe add bootstrap to handle email sign ups, worst case we have a link to a mail chimp
////////// 2.
//////////
//////////
//////////////////////////////////////////
export default function Header() {
  return (
    <div className="parent">
          <img src={Clouds} className="Clouds" />
      <section class="sect-banner" id="header">
      <img src={Logo} className="Logo" />
        <EmailForm />
        <section class="kf-slider">
          <div />
          <div />
          <div />
        </section>
        <div class="v-center">
          <p className="Title">Personalized Match Making</p>
          <p className="Sub">one time $1500 membership fee waived for new signups *limited time only</p>
        </div>
      </section>
    </div>
  )
}
