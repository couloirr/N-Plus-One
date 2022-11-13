import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllBikesView from './pages/AllBikeView.js';
import { LoginPage } from './containers/LoginPage.js';
import { LandingPage } from './containers/LandingPage.js';
import { AuthenticationPage } from './pages/AuthenticationPage.js';
import './css/app.css';
import { getDbUser } from './actions/userActions.js';
import { useDispatch } from 'react-redux';

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/" element={<AllBikesView />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/authenticate" element={<AuthenticationPage />} />
    </Routes>
  );
}
