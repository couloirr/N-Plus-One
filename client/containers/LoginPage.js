import React from 'react';
import { useAuth } from '../hooks/useAuth';
export const LoginPage = () => {
  const { login } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // login({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  }
  return (
    <div className="loginWrapper">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="text" name="username" placeholder="Password"></input>
        <button type="submit">Login</button>
        <button>Signup</button>
      </form>
    </div>
  );
};
