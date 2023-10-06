import logo from './logo.svg';
import './App.css';
import image from './assets/react-logo.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <img src={image}  alt="no image available"></img>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React as soon as possible
        </a>
      </header>
    </div>
  );
}

export default App;
