import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';

export default function Login() {
  const { setIsSignedIn, setUserName } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.password) {
      showNotification('Please fill in both username and password.');
      return;
    }
    const storedName = localStorage.getItem('userName');
    const storedPassword = localStorage.getItem('userPassword');
    if (formData.name === storedName && formData.password === storedPassword) {
      setUserName(formData.name);
      setIsSignedIn(true);
      showNotification('Login successful!');
      navigate('/');
    } else {
      showNotification('Invalid username or password.');
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <form onSubmit={handleSubmit} className="sign-up-form">
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}