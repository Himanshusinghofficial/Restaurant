import React, { useEffect, useState } from 'react';
import Home from './Home';
import Header from './Header'
import './App.css'
import Shimmer from './Shimmer'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  const [count, setCount] = useState(true);
  useEffect(() => {
    M.AutoInit();
    setTimeout(() => {
      setCount(false);
    }, 3000);
  }, [count, setCount]);

  return (
    <div className="App">
      {count ? <Shimmer /> : <div><Header /><Home /></div>}
    </div>
  );
}

export default App;
