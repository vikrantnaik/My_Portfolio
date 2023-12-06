import React, { useState } from 'react'

import { images } from '../../Constants'
import  wrapper  from '../../wrapper/wrapper';
import {  client } from "../../client";

import './Foooter.scss';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', massage: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const {name, email, massage} = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      massage : massage
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
     })

  }
  return (
    <>
      <h2 className='head-text'>Hire me & have a Chat</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:vikrantv.naik45@gmail.com">vikrantv.naik45@gmail.com</a>
        </div>
         <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+918793660895">+91 8793660895</a>
        </div>
      </div>
      {console.log(isFormSubmitted)}
      { !isFormSubmitted ? 
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className='p-text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleInputChange} />
          </div>
          <div className="app__flex">
            <input className='p-text' type="email" placeholder='Your Email' name="email" value={email} onChange={handleInputChange} />
          </div>
          <div>
            <textarea name="massage" className='p-text' placeholder='Your Message' value={massage} onChange={handleInputChange} />
          
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'sending' : ' Send Message '}</button>
        </div> 
        : <div>
          <h3 className='head-text'>Thank You For Getting In Touch </h3>
        </div>

      
      }
    
    </>
  )
}

export default wrapper(Footer, "contact"  );
