import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationBanner from './components/NotificationBanner';
import Login from './components/pages/Login';
import { useSelector } from 'react-redux';

function App() {

  const { isSignedIn, userName } = useSelector(state => state.auth);

  return (
        <NotificationProvider>
          <Router basename='/react-website-1-main/'>
            <NotificationBanner />
            <NavBar isSignedIn={isSignedIn} userName={userName} />
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/services' Component={Services} />
              <Route path='/products' Component={Products} />
              <Route path="/sign-up" element={<SignUp  />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </NotificationProvider>
  );
}

export default App;
