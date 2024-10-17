import logo from './logo.svg';
import './App.css';
import Typewriter from "./Typewriter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div class="scrolling-text">
            
          </div>
        </p>
      </header>
    </div>
  );
}

export default App;
