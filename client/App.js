import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer.js';
import { LoginPage } from './containers/LoginPage.js';
import { LandingPage } from './containers/LandingPage.js';
import { AuthenticationPage } from './pages/AuthenticationPage.js';
import './css/app.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<MainContainer />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/authenticate" element={<AuthenticationPage />} />
    </Routes>
  );
}
