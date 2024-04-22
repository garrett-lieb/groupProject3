import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const LoginPage = () => {
  return (
    <div className="loginWrapper">
      <h2>Client Login</h2>
      <form>
        <div className="container">
          <label className="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label className="password">Password:</label>
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button className="loginBtn" type="submit">
            Login
          </button>
          {/* reveiw https://react.tips/checkboxes-in-react-16/
           <label>
            <input type="checkbox" checked="checked" name="remember" />
            Remember me
          </label> */}
        </div>
        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="password">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
