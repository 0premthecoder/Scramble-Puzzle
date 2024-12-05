
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
