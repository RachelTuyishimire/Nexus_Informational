import React, { useState } from 'react';
// import './ciu.png'
import './about.css'

const About = ()=> {
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  return (
    <div>
          <h2 className='title'>Why Nexus?</h2>
    <div className='about'>
      
      <p className='text'>
        Nexus Interface Unit is a device enabling real-time monitoring of
        <br />
        power consumption. It displays power capacity as well as empowering users
        <br />
        to enhance their understanding and control of energy usage.<br/>
        This device introduces a feature that enables power sharing among adjacent users,
            <br/> addressing situations where electricity resources are limited.
      </p>
      <div className='shapes'>
      <div className="square1"></div><br/>
      <div className="square2"></div><br/>
     <div className="circle">    
      <img className="pic" src="./ciu.png"/></div>
     </div>
    </div>
    </div>
  )
};

export default About;
