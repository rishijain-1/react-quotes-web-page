import React,{useEffect, useState} from 'react';
import './Quote.css'

const Quote=()=>{
 
    const Quotes=[];
    const [quote,setquote]= useState({
        text:"Quote of the Day",
        author:"Author",
    });
   


 const getQuote=async()=>{
        
        const url="https://type.fit/api/quotes";
        const response=await fetch(url);
        const Quotes=await response.json();
        console.log(Quotes);
        const num=Math.floor(Math.random()*Quotes.length);
        setTimeout(() => {
            setquote(Quotes[num]);
        }, 1000);
    }

    
    return(
      
        
        <div className="container">
            <div className="content">
                <p>{quote.text}</p>
                <p className="author">-{quites.author.split(',')[0]}</p>
            </div>
            <div className="button" onClick={()=>{getQuote()}}>click me</div>
        </div>
    )
}

export default Quote;
