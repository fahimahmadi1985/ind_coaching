import React, { useState } from 'react';
import './header.css'
import City from './City';

//javascript
// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }


function Header() {

  //javascript (main location for javascript codes)

  //define STATE variable in react
  const [city, setCity] = useState();
  const [status, setStatus] = useState({ temp: '', condition: '', icon: '' });

  //define a function
  function clickButton() {
    const url = `http://api.weatherapi.com/v1/current.json?key=fc1a936d3a8a422b928201633221102&q=${city}&aqi=no`
    fetch(url)
      .then((res) => res.json())
      .then(result => setStatus({ temp: result.current.temp_c, condition: result.current.condition.text, icon: result.current.condition.icon }))
      .catch(err => console.log(err))

  }

  const changeHandler = (e) => { setCity(e.target.value) }

  return (
    <div className="header">
      {/* javascript */}

      {/* <Navbar /> */}
      <input type="text" name="search" placeholder="type the city name" onChange={changeHandler} />
      <button className="btn btn-outline-primary ml-2" onClick={clickButton}>Search</button>

      <span>{status.condition} {status.temp}deg  <img src={status.icon} alt="icon" /></span>

      {/* <City shahr={city} click={clickButton} /> */}
    </div>
  )
}

export default Header




// function methodName(arguments) {
//   // body
// }

// const methodName = (arguments) => {//body}                  //arrow function
//   const methodName2 = function (arguments) {//body}           //anonymouse function



//     function sum(num1, num2, cb) {
//       let result = num1 + num2;

//       cb(result);
//     }

//     sum(4, 5, (result) => { console.log(result) })
//     sum(4, 5, (result) => { result * 4 })
//     sum(4, 5, (result) => { result * 4 })


