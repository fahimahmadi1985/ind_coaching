import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = React.useState({});
  const navigate = useNavigate();

  //change handler
  function changeHandler(event) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  //submit handler
  async function submitHandler(event) {
    event.preventDefault();

    try {
      let res = await axios({
        method: "POST",
        url: "http://localhost:5000/users/login",
        data: loginData,
      });
  
      if (res.status === 200) {
        alert('Welcome to our application');
        navigate("/");
      } 
      
    } catch (error) {
        alert('please try again')
    }

  }

  return (
    <div className="border w-50 p-5 m-auto mt-5 rounded shadow">
      <form className="form" onChange={changeHandler} onSubmit={submitHandler}>
        <h3 className="mb-5 text-center">Login</h3>
        <input
          type="text"
          name="username"
          className="form-control mb-3"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          className="form-control mb-5"
          placeholder="Password"
        />
        <input
          type="submit"
          value="Login"
          className="btn btn-outline-primary form-control"
        />
      </form>
    </div>
  );
}

export default Login;
