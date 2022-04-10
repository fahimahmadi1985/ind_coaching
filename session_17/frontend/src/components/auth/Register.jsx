import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  //state variable
  const [user, setUser] = useState({});

  //changeHandler => to read the values from form elements
  function changeHandler(event) {
    setUser({...user, [event.target.name]: event.target.value })
  }

  //submitHandler => send data to the backend
  function submitHandler(event) {
    event.preventDefault();
    
    axios({
      method: 'POST',
      url: "http://localhost:5000/users/register",
      data: user
    })
  }

  return (
    <div className='border p-5 w-75 m-auto mt-5 shadow'>
      <h3 className='mb-5 text-center'>Register yourself here!</h3>
      <form className='form' onChange={changeHandler} onSubmit={submitHandler}>
        <input className='form-control mb-3' type="text" name="fullname" placeholder='Fullname'/>
        <input className='form-control mb-3' type="text" name="username" placeholder='Username'/>
        <input className='form-control mb-3' type="email" name="email" placeholder='Email'/>
        <input className='form-control mb-5' type="password" name="password" id="" placeholder='Password'/>
        <input className='form-control mb-3 btn btn-primary' type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register