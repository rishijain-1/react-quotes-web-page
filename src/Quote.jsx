import React,{useEffect, useState} from 'react';
import './Quote.css'

const Quote=()=>{
    const Quotes=[];
    const [quote,setquote]= useState({
        text:"Be your own Developer",
        author:"Rishi Jain",
    });
    const [loading,setLoading] = useState(false)
    
  
    const getQuote=async()=>{
        setLoading(true);
        const url="https://type.fit/api/quotes";
        const response=await fetch(url);
        const Quotes=await response.json();
        const num=Math.floor(Math.random()*Quotes.length);
        setTimeout(() => {
            setquote(Quotes[num]);
            setLoading(false); // Set loading to false when fetching ends
        }, 1000);
    }
    
    return(
      
        
        <div className="container">
            <div className="content">
                {loading && <div className="loader">Loading....</div>}
                <p>{quote.text}</p>
                <p className="author">-{quote.author.split(',')[0]}</p>
            </div>
            <div className="button" onClick={()=>{getQuote()}}>click me</div>
        </div>
    )
}

export default Quote;
