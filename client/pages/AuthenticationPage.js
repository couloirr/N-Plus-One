import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store';
import { getUser } from '../actions/userActions';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { getStravaUser } from '../actions/userActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export const AuthenticationPage = () => {
  const user = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const id = searchParams.get('id');
    const token = searchParams.get('token');
    const getUserThunk = getStravaUser(id, token);
    dispatch(getUserThunk);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user);
    navigate('/home');
  };
  return (
    <div>
      <h1>Successfully synced with Strava. Redirecting...</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
