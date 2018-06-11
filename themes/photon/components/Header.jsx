import React from 'react';
import Link from 'gatsby-link';
import './Header.scss';

export default function Header(props) {
 return (
   <section id="header">
     <div className="inner">
       <span className="icon major fa-cloud"></span>
       <h1><strong>Tony Morrison Transport LLC.</strong><br /></h1>
       <h4>Las Vegas local, <br />
       Nationwide reach.</h4>
       <ul className="actions">
         <li><a href="#one" className="button scrolly">About</a>
         <a href="#one" className="button scrolly">Contact</a>
         <a href="#one" className="button scrolly">Social</a>
         </li>
       </ul>
     </div>
   </section>
 )
}
