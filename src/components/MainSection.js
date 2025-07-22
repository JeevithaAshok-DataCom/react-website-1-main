import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import { useNavigate } from 'react-router-dom';


function MainSection() {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/cards');
  };
  return (
    <div className='main-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button
          to='/cards'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          // onClick={() => navigate('/cards')}
          // onClick={handleStartClick} - not working to be checked
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
