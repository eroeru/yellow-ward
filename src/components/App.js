import logo from '../assets/logo.svg';
import './App.css';

function App() {

  const WardString = "<f'n ward bb>";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {WardString}
        </a>
      </header>
    </div>
  );
}

export default App;
