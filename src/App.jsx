import { useState } from 'react'
import './App.css'
import Para from './Para'

function App() {
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
      <input type="text" name="input" id="inp" value={input} onChange={(e)=> setInput(e.target.value)} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' , margin: "10px"}} />
      <button onClick={()=> scramble()}>Scramble it 🎲</button>
      {scrambleWord.map((word, index) => (
         <Para key={index}>{word}</Para>
      ))}
      <hr />
    </>
  )
}

export default App
