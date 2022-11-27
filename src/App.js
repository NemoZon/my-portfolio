import React, {useState} from 'react';
import './App.css';
import MyNav from './components/UI/navbar/MyNav';
import MyPortfolio from './components/MyPortfolio';


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
      console.log("hello");
    }, 2000)
  } else {
    clearTimeout(timeout)
  }


  return (
    !loading &&
    <div className='container'>
      <MyNav text="GB Studio_" logo="./img/logo/logo.svg" />
      <MyPortfolio></MyPortfolio>
    </div>
  );
}

export default App;
