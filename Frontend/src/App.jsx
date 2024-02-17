import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import {Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        {/* <Hero/> */}
      </div>
      {/* <Companies/>
      <Residencies/>
      <Value/>
      <GetStarted/>
      <Footer/> */}
      <Routes>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/" element={<HomePage/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
