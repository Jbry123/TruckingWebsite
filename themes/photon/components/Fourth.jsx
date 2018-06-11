import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';


export default function Fourth(props) {
  return (
    <section id="four" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2><strong>Get a fast quote!</strong></h2>
        </header>
        <p>Sed lacus nascetur ac ante amet sapien.</p>
        <ul className="actions uniform">
          <li><a href="#" className="button special">Contact me</a></li>
          <li><a href="#" className="button">Set Up Appointment</a></li>
        </ul>
      </div>
    </section>
  )
}
