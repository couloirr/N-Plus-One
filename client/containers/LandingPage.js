import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDbUser } from '../actions/userActions';

export const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log('in use effect');
  //   const db = '635811047341a1bf7561c3c0';
  //   const getUserThunk = getDbUser(db);
  //   dispatch(getUserThunk);
  // }, []);
  async function login() {
    console.log('in use effect');
    const db = '635811047341a1bf7561c3c0';
    const getUserThunk = getDbUser(db);
    dispatch(getUserThunk);
  }

  useEffect(() => {
    login();
    setTimeout(() => navigate('/home'), 1000);
  }, []);

  // const { login } = useAuth();
  async function handleClick(e) {
    // e.preventDefault();
    // navigate('/home');
  }
  return (
    <div className="landingWrapper">
      <h1>Landing Page</h1>
      <button onClick={handleClick}>Try It</button>
    </div>
  );
};
