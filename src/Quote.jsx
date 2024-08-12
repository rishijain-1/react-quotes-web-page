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
        try{
            setLoading(true);
            const url="https://type.fit/api/quotes";
            const response=await fetch(url);
            Quotes=await response.json();
            const num=Math.floor(Math.random()*Quotes.length);
            setTimeout(() => {
                setquote(Quotes[num]);
                setLoading(false); 
            }, 1000);
        }
        catch(error){
            console.log(error);
        }
    }
    
    return(
      
        
        <div className="container">
            <div className="content">
                <p>{loading ? "Loading...":quote.text}</p>
                <p className="author">-{loading ?"Author":quote.author.split(',')[0]}</p>
            </div>
            <div className="button" onClick={()=>{getQuote()}}>click me</div>
        </div>
    )
}

export default Quote;
