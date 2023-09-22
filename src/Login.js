 import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
  // Import the BookManager component
  import Main from './About';

const Login = () => {
const [formData, setFormData] = useState({
  email: '',
  password: '',
});

const [error, setError] = useState(null); // State to store the error message
const [successMessage, setSuccessMessage] = useState(null); // State to store the success message
const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleLoginSubmit = (e) => {
  e.preventDefault();

  // Make a POST request to your login endpoint
  axios.post('http://localhost:8080/api/login', formData) // Use the appropriate URL for your backend
    .then(response => {
      console.log(response.data);
      setSuccessMessage("Login successful"); // Set the success message
      setIsLoggedIn(true); // Mark the user as logged in
    })
    .catch(err => {
      if (err.response) {
        // If the error is from the server (HTTP error response)
        setError("Invalid credentials"); // Set an error message
      } else {
        // Handle other errors (e.g., network issues)
        console.error(err);
      }
    });
};

// If the user is logged in, render the BookManager component
if (isLoggedIn) {
  return <Main />;
}

return (
  <div className="login-page">
    <h1>LOGIN</h1>
    
    <form onSubmit={handleLoginSubmit}>
    <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      required
    />
  </div>
  {error && <p className="error-message">{error}</p>} {/* Display the error message */}
  {successMessage && <p className="success-message">{successMessage}</p>} {/* Display the success message */}
  <button type="submit">Login</button>
</form>
      </div>

);
}
export default Login