import Hero from "./Hero";
import Navbar from "./Navbar";
import Background from "./layouts/Background";
import Services from "./Services";
import Logo from "./subcomponents/Logo";

const App = () => {
  const naviLeft = <Logo />;
  const naviRight = <input></input>;
  return (
    <div>
      <Navbar left={naviLeft} right={naviRight} />
      <Background>
        <Hero />
        <Services />
      </Background>
    </div>
  );
};

export default App;
