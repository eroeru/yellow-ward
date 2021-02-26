import Hero from "./Hero";
import Navbar from "./Navbar";
import Background from "./layouts/Background";
import Services from "./Services";
import Logo from "./subcomponents/Logo";
import Button from "./subcomponents/Button";
import Portfolio from "./Portfolio";
import Clients from "./Clients";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

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
    <Background>
      <Navbar left={naviLeft} right={naviRight} />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
    </Background>
  );
};

export default App;
