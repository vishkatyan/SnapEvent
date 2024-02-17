import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import './Residencies.css';
import data from '../../utils/slider.json';
import { SliderSettings } from '../../utils/common';


const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Popular Events at SnapEvent</span>
                <span className='primaryText'>Explore Online Webinars</span>
            </div>
            {/* carousel */}
            <Swiper {...SliderSettings}>
                <SliderButtons/>
                {data.map((card,i)=> (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card" onClick={()=>{alert("Details of the Event are:")}} >
                                <img src={card.image} alt="home" />

                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                                {/* <button className='button' onClick={()=>{
                                    
                                }}>Get Details</button> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons = ()=>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()} >&lt;</button>
            <button onClick={()=> swiper.slideNext()} >&gt;</button>
        </div>
    )
}