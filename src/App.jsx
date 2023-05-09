import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AboutUs />
      <Services />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;



