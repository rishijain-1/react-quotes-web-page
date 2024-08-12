import Quote from "./Quote"
import {useEffect,React} from 'react'

const  App=()=>{
  useEffect(()=>{
   const timer= setTimeout(()=>{
       alert(`Welcome To Rishi Jain Quotes Page`) 
    },1000);
    return()=>clearTimeout(timer);
})
  return <>
    <Quote/>
  </>
  
}

export default App
