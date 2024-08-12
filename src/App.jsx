import Quote from "./Quote";
import {useEffect,React} from 'react';
import Navbar from "./Nabar";
import "./App.css" ;
const  App=()=>{
  useEffect(()=>{
   const timer= setTimeout(()=>{
       alert(`Welcome To Rishi Jain Quotes Page`) 
    },1000);
    return()=>clearTimeout(timer);
})
  return (
  <>
    <Navbar/>
    <Quote/>
  </>)
  
}

export default App
