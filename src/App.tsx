import React from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
// import { Main } from './content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// const app = document.createElement('div');
// app.id = "opennotes-app-root";

// document.body.appendChild(app);
// ReactDOM.render(<Main />, app);

export default App;
