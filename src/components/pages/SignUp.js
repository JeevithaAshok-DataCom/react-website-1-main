import React, {useState} from 'react';
import '../../App.css';
import '../pages/SignUp.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNotification } from '../../contexts/NotificationContext';
import { registerUser } from '../../redux/authSlice'; 

export default function SignUp() {

  const dispatch = useDispatch();
  const { showNotification } = useNotification();
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const { loading, error } = useSelector(state => state.auth);
  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  
const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then((user) => {
        showNotification(`Welcome, ${user.name}!`);
        navigate('/');
      })
      .catch(() => {});
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
