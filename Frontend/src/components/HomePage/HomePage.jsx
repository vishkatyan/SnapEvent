import React from 'react'
import Hero from '../Hero/Hero'
import Companies from '../Companies/Companies'
import Residencies from '../Residencies/Residencies'
import Value from '../Value/Value'
import GetStarted from '../GetStarted/GetStarted'
import Footer from '../Footer/Footer'
import '../Hero/Hero.css'
import '../../App.css'
// import Header from '../Header/Header'

const HomePage = () => {
  return (
    <div>
        <div>
        <div className="white-gradient"/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default HomePage