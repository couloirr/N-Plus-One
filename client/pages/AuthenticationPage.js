import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { getStravaUser } from '../actions/userActions';
import { useDispatch } from 'react-redux';
export const AuthenticationPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const id = searchParams.get('id');
    const token = searchParams.get('token');
    const getUserThunk = getStravaUser(id, token);
    dispatch(getUserThunk).then(() => navigate('/home'));
  }, []);
};
