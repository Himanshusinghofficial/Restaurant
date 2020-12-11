import React,{ useEffect } from 'react';
import Home from './Home';
import Header from './Header'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

 const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Header />
      <div>
      <Home />
      </div>
    </div>
  );
}

export default App;
