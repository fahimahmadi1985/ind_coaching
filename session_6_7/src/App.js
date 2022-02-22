import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from "./header";


function App() {
  const [name, setName] = useState('david')
  const [lname, setlName] = useState()
  const [users, setUsers] = useState([])
  const [number, setNumber] = useState(2);


  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${number}`)
      .then(res=> res.json())
      .then(result => setUsers(result.results))
      .catch(err => console.log(err))
    
  }, [number])
  
    

  return (
    <div>
  
      <Header firstName={name} lastName={ lname}/>
      <br />
      <input type="text" name="number" id="" onChange={(event) => { setNumber(event.target.value) }} />
      <input type="text" name="firstname" onChange={(event) => { setName(event.target.value) }} /> 
      <input type="text" name="lastname" onChange={(event) => { setlName(event.target.value) }} />
      <input type="button" value="Save" onClick={(event) => { alert(`Hello ${name} ${lname}`)}}/>
      <p>firstName: { name} </p>    
      <p>lastName: {lname} </p>    
      
     
      
      {users.map((u) => (<div>
        <img src={u.picture.large} alt="profile" />
        <p>FullName: {u.name.first} {u.name.last}</p>
      </div>))}

      <h1>App : Name: {name}</h1>
      <Footer firstName={name}/>

    </div>
  );
}

export default App;

