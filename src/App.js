import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './Login';

import { Button } from '@material-ui/core';

import {Route, Switch,Link} from "react-router-dom";
import MenuAppBar from './components/Header';


function App() {

  const [submitted,setSubmitted] = useState('');


  // useEffect(()=>{
  //   console.log(localStorage.getItem('isAuth'));
  //   const setSubmit = localStorage.getItem('isAuth');
  //   setSubmitted(JSON.stringify(setSubmit));
  //   console.log('App.js',submitted);
  // })

  const handleLogin =(loginValue)=>{
    console.log('handle submit!!', loginValue);
    const value = loginValue
    setSubmitted(value);

    console.log('After Login test', submitted)
  }

  // useEffect(() => {
    
  //   const value = localStorage.getItem('isAuth');
  //   console.log(value);
  //   setSubmitted(value); 
  //   console.log('useEffect called => ',submitted);
      
   
  // }, [localStorage.getItem('isAuth')])

  return (
    <div className="App">

<Switch>
      {submitted === 'true' ?(
       
      <div>
        { console.log('sss', submitted)}
      <MenuAppBar submitted = {handleLogin}></MenuAppBar>    
      <Route exact path = '/about' render={()=><About/>} ></Route>
      <Route exact path = '/contact' render={()=><Contact/>} ></Route>
      <Route exact path = '/Home' render={()=><Home/>}></Route>
    </div> ):
     <Route exact path = '/' render={()=><Login submitted = {handleLogin} />} ></Route>
      }

</Switch>   
   
   

 
     
    </div>
  );
}

export default App;
