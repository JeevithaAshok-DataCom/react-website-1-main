import React, {useState} from 'react';
import '../../App.css';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useNotification } from '../../contexts/NotificationContext';
export default function SignUp() {
  // return <h1 className='sign-up'>Sign Up :)</h1>;
  const { setIsSignedIn, setUserName } = useAuth();
  const { showNotification } = useNotification();
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted (not connected to backend)', formData);
    setUserName(formData.name);
    setIsSignedIn(true);
    localStorage.setItem('isSignedIn', 'true');
    localStorage.setItem('userName', formData.name);
    localStorage.setItem('userPassword', formData.password);
    localStorage.setItem('userEmail', formData.email);
    showNotification('Welcome! Don\'t miss our upcoming adventure offers!');
    navigate('/');
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
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
}
