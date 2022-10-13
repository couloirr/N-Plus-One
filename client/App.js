import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import { LoginPage } from './containers/LoginPage';
import './css/app.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
