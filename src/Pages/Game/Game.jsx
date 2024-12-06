import React from 'react'
import Para from '../../Components/Para'
import { useState } from 'react'
const Home = () => {
    const [input, setInput] = useState("Try it")
    const [scrambleWord, setScrambleWord] = useState([])
    
    const scramble = ()=>{
      let value = ''
      for (let i of input){
        let n = i.charCodeAt();
        n = n+1
        let s = String.fromCharCode(n)
        value= value+s
      }
      setScrambleWord([...scrambleWord, value])
    }
  
  
  
    // const unScramble(){
      
    // }
    return (
      <>
        <h1>🫣</h1>
        <h1>Scramble Puzzle</h1>
        <input type="text" placeholder='Write Something' name="input" id="inp" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={()=> scramble()}>Scramble it 🎲</button>
        {scrambleWord.map((word, index) => (
           <Para key={index}>{word}</Para>
        ))}
      </>
    )
}

export default Home