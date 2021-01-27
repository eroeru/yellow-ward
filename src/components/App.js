import Hero from "./Hero";
import Navbar from "./Navbar";
import Background from "./layouts/Background";
import Services from "./Services";
import Logo from "./subcomponents/Logo";
import Button from "./subcomponents/Button";

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
    </Background>
  );
};

export default App;
