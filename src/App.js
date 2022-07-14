import logo from "./logo.svg";
import "./App.css";
import Calculator from "./containers/Calculator";
import Clock from "./containers/Clock";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <center>
        <h1>Awesome Calculator</h1>
        <Calculator />
        <br />
        <br />
        <Clock />
      </center>
    </div>
  );
}

export default App;
