import React from 'react';
import './App.css';
import MyNav from './components/UI/navbar/MyNav';
import MyPortfolio from './components/UI/windows/MyPortfolio';


function App() {
  return (
    <div className='container'>
      <MyNav text="GB Studio_" logo="./img/logo/logo.svg" />
      <MyPortfolio></MyPortfolio>
    </div>
  );
}

export default App;
