// import React from 'react';
// import './Header.scss';
// import Logo from '../images/MarriageUSA.png';
// import axios from 'axios';
// import request from 'request';

// class EmailForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       formValues: {}
//     }
//   }


// async function({ email }) {
//     const data = {
//       email_address: email,
//       status: 'subscribed',
//     };
//   const listId = 'xxxxxxxxxx';
//     const API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us17';
//   await new Promise((resolve, reject) => {
//       request.post(
//         {
//           uri: `https://us17.api.mailchimp.com/3.0/lists/${listId}/members/`,
//           headers: {
//             Accept: 'application/json',
//             Authorization: `Basic ${Buffer.from(`apikey:${API_KEY}`).toString('base64')}`,
//           },
//           json: true,
//           body: data,
//         },
//         (err, response, body) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(body);
//           }
//         },
//       );
//     });
//   }

//   handleChange(event) {
//     event.preventDefault();
//     let formValues = this.state.formValues;
//     let name = event.target.name;
//     let value = event.target.value;

//     formValues[name] = value;

//     this.setState({ formValues })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.formValues);
//   }
//   render() {
//     return (
//       <form className="subscriptionForm" onSubmit={this.handleSubmit.bind(this)}>
//       <img className="Logo" src={Logo} />
//         <label> Name:
//           <input className="input1" type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
//         </label><br />
//         <label> Email:
//           <input className="input2" type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)} />
//         </label><br />
//         <input className="button" type="submit" value="Submit" onClick={this.function}/>
//       </form>
//     )
//   }
// }

// module.exports = EmailForm;

import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form';


class EmailForm extends Component {
  render() {
    return (
      <Mailchimp
        action='https://marriageusa.us18.list-manage.com/subscribe/post?u=ef24d5928b58098618dddb572&amp;id=47e900217a'

        //Adding multiple fields:
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          },
          {
            name: 'FNAME',
            placeholder: 'Name',
            type: 'text',
            required: true
          },
          {
            name: 'CODE',
            placeholder: 'Affiliate Code',
            type: 'text',
            required: false
          }
        ]}
        // Change predetermined language
        message={
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Sign Up!" // didnt render the button
          }
        }
        // Add a personalized class
        className='subscriptionForm'
      />
    );
  }
}

module.exports = EmailForm;

// import React, { Component } from 'react';

// class EmailForm extends Component {
//   render() {
//     return (
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// </style>
// <div id="mc_embed_signup">
// <form action="https://marriageusa.us18.list-manage.com/subscribe/post?u=ef24d5928b58098618dddb572&amp;id=47e900217a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe to our mailing list</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">EMAIL  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
// </div>
// <div class="mc-field-group">
// 	<label for="mce-FNAME">FNAME  <span class="asterisk">*</span>
// </label>
// 	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" />
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ef24d5928b58098618dddb572_47e900217a" tabindex="-1" value="" /></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
//     </div>
// </form>
// </div>
//       );
//     }
//   }