import logo from './logo.svg';
import './App.css';

function App() {

  const wardString = "<f'n ward bb>";
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
          {wardString}
        </a>
      </header>
    </div>
  );
}

export default App;
