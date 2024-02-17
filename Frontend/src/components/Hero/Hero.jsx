import React from 'react'
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            < div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>

                    <motion.h1
                    initial = {{y:"2rem", opacity:0}}
                    animate = {{y:"0", opacity:1}}
                    transition={{
                        duration:2,
                        type : "spring"
                    }

                    }
                    >Your Online<br /> Presence <br /> Matters..</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>SnapEvent - An Event Organizer</span>
                    <span className='secondaryText'>SnapEvent is an event organizer platform on which top speakers <br />discuss by validating them with real users.</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>

                {/* Ststs show up */}
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Attendees</span>
                    </div>
               

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Speakers</span>
                    </div>
               

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp  end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Events</span>
                    </div>
                    </div>
                
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                
                <motion.div
                initial = {{x:"7rem", opacity:0}}
                animate = {{x:0, opacity:1}}
                transition ={{
                    duration:2,
                    type:"spring"
                }}
                 className="image-container">
                    <img src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero section image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero