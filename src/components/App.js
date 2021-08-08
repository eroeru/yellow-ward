import Hero from "./Hero";
import Navbar from "./Navbar";
import Services from "./Services";
import Logo from "./subcomponents/Logo";
import Button from "./subcomponents/Button";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import React from "react";
import ReactDom from "react-dom";


function App() {
  const serviceRef = React.createRef();
  const portfolioRef = React.createRef();
  const aboutUsRef = React.createRef();
  const contactUsRef =  React.createRef();

  function scrollToLocation(reference) {
    let objectTop = reference.current.getBoundingClientRect().top + window.pageYOffset;
    let middle = (objectTop) - (window.innerHeight / 4);
    window.scrollTo(0, objectTop);  
  }
 
  const naviLeft = <Logo />;
  const naviRight = (
    <div>
      <Button as="button" onClick={() => scrollToLocation(serviceRef)}> services </Button>
      <Button as="button" onClick={() => scrollToLocation(portfolioRef)}> portfolio </Button>
      <Button as="button" onClick={() => scrollToLocation(aboutUsRef)}> about us </Button>
      <Button as="button" onClick={() => scrollToLocation(contactUsRef)}> contact </Button>
    </div>
  );
  return (
    <React.Fragment>
      <Navbar left={naviLeft} right={naviRight} />
      <Hero />
      <Services ref={serviceRef}/>
      <Portfolio ref={portfolioRef}/>
      <Clients />
      <About ref={aboutUsRef}/>
      <Testimonials />
      <Contact ref={contactUsRef}/>
    </React.Fragment>
  );
}

export default App;