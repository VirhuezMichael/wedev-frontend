import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import NavBar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
// import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <AboutUs />
      <Services />
      {/* <Clients /> */}
      <Contact />
      <Footer/>
    </>
  );
}

export default App;



