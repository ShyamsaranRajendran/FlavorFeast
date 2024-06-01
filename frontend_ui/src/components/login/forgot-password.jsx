import React, { useState } from "react";
import axios from "axios";
import "./forgot.css";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/usr/forgot-password",
        {
          email,
        }
      );
      if (response.data.token) {
        setMessage("An OTP has been sent to your email address.");
        window.location.href = `/reset-password?token=${response.data.token}`;
      } else {
        setMessage("Failed to initiate password reset: " + response.data.error);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="forgot-container">
      <h2 className="forgot-title">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-form">
        <div>
          <label htmlFor="email" className="forgot-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="forgot-input"
          />
        </div>
        <button type="submit" className="forgot-submit-btn">
          Submit
        </button>
      </form>
      {message && <p className="forgot-message">{message}</p>}
    </div>
  );
}

export default ForgotPassword;
