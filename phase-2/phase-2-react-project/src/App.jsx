import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
