import React from 'react';
import ReactDOM from 'react-dom/client';

// import Car from './components/Car';
// import List from './components/List';
import App from './App';

import FavoriteColor from './components/FavoriteColor';
// import Scooter from './components/Scooter';
import Timer from './components/Timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FavoriteColor/>
    {/* <Car/> */}
    {/* <Scooter /> */}
    {/* <List /> */}
    <Timer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

