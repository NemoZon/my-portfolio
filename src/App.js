import React, {useState} from 'react';
import './App.css';
import MyNav from './components/UI/navbar/MyNav';
import MyPortfolio from './components/MyPortfolio';
import MyMainPage from './components/MyMainPage';


function App() {
  const [loading, setLoading] = useState(true)
  const [line, setLine] = useState(0)
  const preloader = document.getElementById('preloader')
  const loadLine = document.getElementById('preloader__text')
  let timeout;
  if (loading) {
    timeout = setTimeout(()=>{
      preloader.style.display = "none"
      setLoading(false)
    }, 2000)
  } else {
    clearTimeout(timeout)
  }
  
  const date = new Date()
  let age;
  if (date.getMonth() > 9 || (date.getMonth() == 9 && date.getDay() >= 22) ) {
      age = date.getFullYear() - 2001;
  } else {
      age = date.getFullYear() - 2001 - 1;
  }

  return (
    !loading &&
    <div className='container'>
      <MyNav text="GB Studio_" logo="./img/logo/logo.svg" />
      <div className='content'>
        <MyPortfolio age={age}></MyPortfolio>
        <MyMainPage age={age}></MyMainPage>
      </div>
    </div>
  );
}

export default App;
