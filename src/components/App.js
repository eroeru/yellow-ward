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

const App = () => {
  const naviLeft = <Logo />;
  const naviRight = (
    <div>
      <Button> services </Button>
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
