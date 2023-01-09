import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';
const name="Mustafa";
const surname="ÇAY";
const isLoggedIn=false;
function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      <Header></Header>
      <User name="Mustafa" surname="ÇAY" isLoggedIn={false}></User>
      <p className="xyz">
        Tempor ut deserunt aliquip commodo ex labore est nostrud excepteur amet incididunt nulla labore culpa. Labore culpa ea amet eu. Veniam anim occaecat occaecat exercitation reprehenderit ad sint consectetur quis enim anim aute nostrud. Sint pariatur enim eu in dolore. Laborum voluptate ea exercitation do duis nisi aute exercitation Lorem exercitation cupidatat voluptate.
      </p>
      <h1>{name}  {surname}</h1>
      <h1>{isLoggedIn && ` Benim Adım ${name}  ${surname} `}</h1>
      <h1>{!isLoggedIn && "Giriş Yapılmadı..."}</h1>

      <h1>{isLoggedIn ? ` Benim Adım ${name}  ${surname} `: "Giriş Yapmadınız .... "}</h1>
    
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
