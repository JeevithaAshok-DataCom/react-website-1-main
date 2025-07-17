import React, {use, useState, useEffect} from 'react';
import '../../App.css';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp({onSignIn}) {
  // return <h1 className='sign-up'>Sign Up :)</h1>;
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
    onSignIn(formData.name);
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
