import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import ScrollToTop from "react-scroll-to-top";



function App() {
  return (
    <div className="App-header">
       {/* <ScrollToTop smooth color= "red" component={<IoIosArrowUp /> }/> */}
      <NavBar/>
      <Landing />
      <Portfolio/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
