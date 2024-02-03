import { useState } from 'react'
import './App.css'
import Flashcardlist from './Flashcardlist';

function App() {
  const list=[
    { question:'Q1: What is this called =()=>{};',
      answer:'Arrow Function'},
    {
      question:'Q2: Can a hook call on another hook',
      answer:'Answer: Yes it can'},
    { 
      question:'Q3: Who created React?',
      answer:'Answer: Jordan Walke in Facebook'},
    {
      question:'Q4: When was React created',
      answer:'Answer: 2013'},
    {
      question:'Q5: What is a popular database system',
      answer:'Relational Database'},     
  ];
  const[array,setArray]=useState(0);
  const [totalCards, setTotalCards] = useState(list.length);


  const leftBtn = () => {
    setArray((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const rightBtn = () => {
    setArray((prevIndex) => Math.min(list.length - 1, prevIndex + 1));
  };
  return (
    <>
    <div className="container">
      <h1>Hello World</h1>
      <p>Click each flashcard to see the answer. Navigate with the arrows.</p>
      <h3>Total Cards: {totalCards}</h3>
      <Flashcardlist flashcards={[list[array]]}/>
    </div>
    
    <button onClick={leftBtn}>Left</button>
    <button onClick={rightBtn}>Right</button>
    </>
  );
}

export default App
