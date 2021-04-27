import React from 'react';

import './Login.styles.css';
const Login = (props) => {
  return (
    <div className="login">
      <img src="LinkedIn-Logo.svg" alt="" />
      <form action="">
        <input type="text" placeholder="Full name (require if registering)" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="email" placeholder="Emails" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Not a member?
        <span className="login__register">Register Now</span>
      </p>
    </div>
  );
};
export default Login;
