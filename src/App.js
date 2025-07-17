import './App.css';
import React, {use, useState} from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';


function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSignIn = (name) => {
    setIsSignedIn(true);
    setUserName(name);
  };

  return (
    <>
    <Router>
      <NavBar isSignedIn={isSignedIn} userName={userName} />
      <Routes>
        <Route path='/' Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path="/sign-up" element={<SignUp onSignIn={handleSignIn}  />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
