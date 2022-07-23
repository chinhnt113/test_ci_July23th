import { useState } from 'react';
import './App.css';
import InputLink from './components/InputLink';
import OutputLink from './components/OutputLink';
import InputCode from './components/InputCode';
import OutputCode from './components/OutputCode';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputCodeValue, setInputCodeValue] = useState("");

  return (
    <div className="App">
      <section className="shortener">
        <InputLink setInputValue={setInputValue}/>
        <OutputLink inputValue={inputValue}/>
      </section>
      <section className="getinfo">
        <InputCode setInputCodeValue={setInputCodeValue}/>
        <OutputCode inputCodeValue={inputCodeValue}/>
      </section>
    </div>
  );
}

export default App;
