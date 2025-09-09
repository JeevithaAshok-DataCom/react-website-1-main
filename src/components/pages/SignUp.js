import React, {useState} from 'react';
import '../../App.css';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNotification } from '../../contexts/NotificationContext';
import { signIn } from '../../redux/authSlice';


export default function SignUp() {

  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const response = await fetch('https://localhost:7240/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });
      if (!response.ok) {
        const data = await response.text();
        setError(data || 'Registration failed');
      } else {
        const user = await response.json();
        dispatch(signIn({ name: user.name, email: user.email }));
        showNotification(`Welcome, ${user.name}!`);
        navigate('/');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="sign-up-container">
      <div className='sign-up'>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        </form>
      </div>
    </div>
  );
}
