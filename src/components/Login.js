import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>Login</h1>
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
