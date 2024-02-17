import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logoremove.png" alt="f-logo" width ={120} />

                <span className="secondaryText">
                    Our vision is to create awareness among people <br />
                    providing them knowledge by workshops & webinars.
                </span>
            </div>
            {/* right side */}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Ghaziabad, Uttar Pradesh, India</span>

                <div className="flexCenter f-menu">
                    <span>Companies</span>
                    <span>Events</span>
                    <span>Return Policy</span>
                    <span>Privacy Policy</span>
                    <span>Contact Us</span>
                </div>
                <span>Design & Developed by <a href="https://www.linkedin.com/in/vishkatyan" className='primaryText' style={{fontSize: 17}} target='_blank'>Vishakha Sharma</a></span>

            </div>
        </div>
    </section>
  )
}
export default Footer
