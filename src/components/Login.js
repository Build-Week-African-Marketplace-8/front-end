import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"

const initialCredentials = {
  username: "",
  password: "",
  role: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  let history = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const appLogin = (e) => {
    e.preventDefault();
    axios.post("", credentials).then((res) => {
      console.log(res);
      const { token, username, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("role", role);

      history.push("/itemslist");
    });
  };



  return (
    <div class="login">
      <h1>Welcome To African Marketplace 8</h1>
      <h2>Login</h2>
      <form onSubmit={appLogin}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button class="login-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
