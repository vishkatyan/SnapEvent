import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with SnapEvent</span>
                <span className='secondaryText'>Subscribe and find the top events from us. 
                    <br /> Fill your Spot Now.
                </span>
                <button className='button'>
                    <a href="mailto:vishkatyan1209@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted