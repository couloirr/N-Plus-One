import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();
  async function handleClick(e) {
    e.preventDefault();
    navigate('/login');
  }
  return (
    <div className="landingWrapper">
      <h1>Landing Page</h1>
      <button onClick={handleClick}>Try It</button>
    </div>
  );
};
