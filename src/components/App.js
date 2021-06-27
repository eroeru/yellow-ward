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
import { buttonClick } from "./subcomponents/Events";

const App = () => {
  const naviLeft = <Logo />;
  const naviRight = (
    <div>
      <Button as="button" onClick={buttonClick}> services </Button>
      <Button> portfolio </Button>
      <Button> about us </Button>
      <Button> contact </Button>
    </div>
  );
  return (
    <React.Fragment>
      <Navbar left={naviLeft} right={naviRight} />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
    </React.Fragment>
  );
};

export default App;
