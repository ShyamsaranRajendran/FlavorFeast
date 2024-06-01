import React, { useState } from "react";
import axios from "axios";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirm_password) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/usr/register", {
        email,
        password,
        confirm_password
      });
      if (response.data.success) {
        setMessage("Registration successful!");
        window.location.href = "/login";
      } else {
        setMessage("Registration failed: " + response.data.message);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="email" className="register-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="register-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password" className="register-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_password"
            value={confirm_password}
            onChange={(e) => setConfirm_password(e.target.value)}
            required
            className="register-input"
          />
        </div>
        <button type="submit" className="register-submit-btn">
          Register
        </button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  );
}

export default Register;
