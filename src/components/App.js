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

  function scrollToLocation(reference) {
    let height = checkLocation(reference);
    window.scrollTo(0, height + document.documentElement.clientHeight / 4);  
  }

  function checkLocation(refLocation) {
    return refLocation.current.getBoundingClientRect().height;
  }
 
  const naviLeft = <Logo />;
  const naviRight = (
    <div>
      <Button as="button" onClick={() => scrollToLocation(serviceRef)}> services </Button>
      <Button> portfolio </Button>
      <Button> about us </Button>
      <Button> contact </Button>
    </div>
  );
  return (
    <React.Fragment>
      <Navbar left={naviLeft} right={naviRight} />
      <Hero />
      <Services ref={serviceRef}/>
      <Portfolio />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
}

export default App;