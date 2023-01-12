
import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';

const name="Mustafa";
const surname="ÇAY";
const isLoggedIn=false;
const age=42;
const dogumYili=1980;
const address={
  title: 'Yenimahalle/Ankara',
  zip : 6370,
};
const family=[
  {
    id:11,
    name:"MUSTAFA"
  },
  {
    id:12,
    name:"IŞIL"
  },
  {
    id:13,
    name:"ZEYNEP"
  },
  {
    id:14,
    name:"MEHMET ALİ"
  },


];

function App() {
/********************Use State **************************/

const [ad,setAd] = useState("Mustafa"); //state tanımlama ve varsayılan değeri atama setAd değiştirecek olan metodun adı.
const [yas,setYas]= useState(42);

console.log({ad,yas});

  return (
    <div className="App">
      <div>
      <h1>State Merhaba {ad}</h1>
      <h1>State Merhaba {yas}</h1>
      <button onClick={()=>setAd("Işıl")}>Adı Değiştir</button>
      <button onClick={()=>setYas(36)}>Yaşı Değiştir</button>
      </div>
      <header className="App-header">
      <Header></Header>
      <User  
        //name="Mustafa" 
        surname="ÇAY" 
        isLoggedIn={true}  
        age={age} 
        dogumYili={dogumYili} 
        friends={["AHMET","BÜLENT","SERKAN","ARİF","MURAT"]} 
        family={family} 
        address={address}
        ></User>
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
