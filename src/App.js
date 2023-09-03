import './App.css';
import { useState } from 'react';
import  data  from './components/data';
import UsePwdGenerator from './hooks/use-pwd-gen';
import PwdStrChecker from './components/PwdStrChecker';


function App() {

  const [length, setLength] = useState(5);
  const [checkboxData, setCheckboxData] = useState(data);
  const [copy, setCopy] = useState(false);

  const {password, errMsg, generatePassword} = UsePwdGenerator();

  // updating checkbox data
  const handleCheckboxChange = (index) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[index].status = !updatedCheckbox[index].status;
    setCheckboxData(updatedCheckbox);
  }

  // handling copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    },1000)
  }

  return (
    <div className="app">
      <div className= "container">
        {password && (
          <div className="header">
            <span>{password}</span>
            <button onClick={() => handleCopy()}>{copy ? "Copied" : "Copy"}</button>
          </div>
          )}
        <div className="char-len">
          <span>Charcter Length :</span>
          <span>{length}</span>
        </div>
        <div className= "inputs">
          <input
            type="range"
            min = {5}
            max = {20}
            value = {length}
            onChange={(e) => setLength(e.target.value)}
            className="styled-slider"
          />
          <div className="checkboxs">
            {
              data.map((item, i) => {
                return (
                  <div className="checkbox" key={i}>
                    <input type="checkbox" id={i} checked ={item.status} onChange={() => handleCheckboxChange(i)}/>
                    <label htmlFor={i}>{item.title}</label>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className = "pwd-str">
          <PwdStrChecker password={password} />
        </div>
        <div className='errMsg'>
          {errMsg && <span>{errMsg}</span>}
        </div>
        <div className = "pwd-btn">
          <button onClick={() => generatePassword(checkboxData, length)}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
