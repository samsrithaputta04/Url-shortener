
import './App.css';
import { useState } from 'react';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import LinkResult from './LinkResult';


function App() {
  const [inputValue, setInputValue] =useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
