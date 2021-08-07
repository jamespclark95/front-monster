import React from 'react';
import Login from './Login';
import Signup from './Signup';

export default function Home() {
  return (
    <div className="mainBody monstersBG">
        <h1>Monster Battle</h1>
        <div className="hello">
        <a className="mainBtn">Sign Up</a>
        <a href={Login} className="mainBtn">Login</a>
        </div>
    </div>
  );
}