import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import Navbar from './components/plugins/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from 'react-scroll-to-top';
import { IoIosArrowUp } from 'react-icons/io';

function App() {
  return (
    <div className="App-header">
      <ScrollToTop smooth color="red" component={<IoIosArrowUp />} />
      <Navbar />
      <Landing />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
