
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages/Game/Game';
import About from './Pages/About/About';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import StudyRevision from './Pages/Rev/StudyRevision';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar/>}>
        <Route index element={<StudyRevision/>}/>
        <Route path='game' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='post' element={<Posts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
