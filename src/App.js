import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes]= useState("");
  const getQuote = ()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=> res.json())
    .then((data)=> {
      // console.log(data[0])
      let randomNum = Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum]);
    });
  }
  useEffect(()=>{
    getQuote();
  },[])
  return (
    <div className='text-center flex flex-col bg-purple-400 h-screen'>
      <div className='m-auto'>
        <div className='border-2 rounded-md border-gray-300 p-3 drop-shadow-lg flex flex-col space-y-2 justify-start'>
        <p>Quote: {quotes.text}</p>
        <p>Author: {quotes.author}</p>
        </div>
      <div className='m-3'> 
     <button onClick={getQuote} className="border-2 border-gray-200 rounded-lg text-white hover:text-black bg-slate-500 hover:bg-sky-300">Generate Quote</button>
     </div>
     </div>
    </div>
  );
}

export default App;
