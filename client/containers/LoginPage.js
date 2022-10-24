import React from 'react';
import { useAuth } from '../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await fetch('auth/strava');
  }
  return (
    <div className="loginWrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="text" name="username" placeholder="Password"></input>
        <button type="submit">Login</button>
        <button>Signup</button>
      </form>
      <form action="http://localhost:3000/auth/strava" method="get">
        <input type="submit" value="Login Auth"></input>
      </form>
    </div>
  );
};
