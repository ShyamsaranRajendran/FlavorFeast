import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/usr/login", {
        email,
        password,
      });
      if (response.data.token) {
        setMessage("Login successful!");
        window.location.href = "/";
      } else {
        setMessage("Login failed: " + response.data.error);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="login-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>
        <div className="forgot">
          <Link exact to="/forgot-passwd" className="forgot-link">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
}

export default Login;
