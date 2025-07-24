import './App.css';
import React, { useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationBanner from './components/NotificationBanner';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() =>
  {
    const storedSignIn = localStorage.getItem('isSignedIn');
    const storedName= localStorage.getItem('userName');
    if(storedSignIn)
    {
      setIsSignedIn(true);
      setUserName(storedName || '');
    }
  },[]);

  const handleSignIn = (name) => {
    setIsSignedIn(true);
    setUserName(name);
    localStorage.setItem('isSignedIn', 'true');
    localStorage.setItem('userName', name);
  };

  

  return (
    <AuthProvider>
      <NotificationProvider>
    <Router>
      <NotificationBanner />
      <NavBar isSignedIn={isSignedIn} userName={userName} setIsSignedIn={setIsSignedIn} setUserName={setUserName}/>
      <Routes>
        <Route path='/' Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path="/sign-up" element={<SignUp onSignIn={handleSignIn}  />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
