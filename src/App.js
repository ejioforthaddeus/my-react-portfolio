
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {themeContext}from "./Context"
import { useContext } from "react";
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
  const theme=useContext(themeContext);
  const darkMood=theme.state.darkMood;
  return (
    <div className="App"
    style={{
      background: darkMood? 'black':'',
      color: darkMood? 'white':''
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
