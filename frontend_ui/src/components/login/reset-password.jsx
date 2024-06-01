import React, { useState } from "react";
import axios from "axios";
import "./reset.css";
function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOTP] = useState(""); 
  const [message, setMessage] = useState("");

  const token = new URLSearchParams(window.location.search).get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/usr/reset-password",
        {
          token,
          OTP: otp,
          newPassword: password,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div className="reset-container">
      <h2 className="reset-title">Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-form">
        <div>
          <label className="reset-label">New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="reset-input"
          />
        </div>
        <div>
          <label className="reset-label">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="reset-input"
          />
        </div>
        <div>
          <label className="reset-label">Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
            className="reset-input"
          />
        </div>
        <button type="submit" className="reset-submit-btn">
          Reset Password
        </button>
      </form>
      {message && <p className="reset-message">{message}</p>}
    </div>
  );
}

export default ResetPassword;
