import './App.css';
import react from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path='/sign-up' Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
