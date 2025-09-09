import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/authSlice';
import { useNotification } from '../../contexts/NotificationContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://localhost:7240/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      if (!response.ok) {
        const data = await response.text();
        setError(data || 'Login failed');
      } else {
        const user = await response.json();
        dispatch(signIn({ name: user.name, email: user.email }));
        showNotification(`Welcome back, ${user.name}!`);
        navigate('/');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up">
        <form onSubmit={handleSubmit} className="sign-up-form">
          <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      </form>
      </div>
    </div>
  );
}