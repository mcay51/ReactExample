import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      <Header></Header>
      <p className="xyz">
        Tempor ut deserunt aliquip commodo ex labore est nostrud excepteur amet incididunt nulla labore culpa. Labore culpa ea amet eu. Veniam anim occaecat occaecat exercitation reprehenderit ad sint consectetur quis enim anim aute nostrud. Sint pariatur enim eu in dolore. Laborum voluptate ea exercitation do duis nisi aute exercitation Lorem exercitation cupidatat voluptate.
      </p>
      <label htmlFor="myInput">
        Name : 
        <input id="myInput"></input>
      </label>
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
      </header>
    </div>
  );
}

export default App;
