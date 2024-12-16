
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './Pages/Game/Game';
import About from './Pages/About/About';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import StudyRevision from './Pages/Rev/StudyRevision';
import Pomodoro from './Pages/Pomodora/Pomodora';
import Counter from './Pages/Counter/Counter';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<StudyRevision />} />
            <Route path='game' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='post' element={<Posts />} />
            <Route path='pomodora' element={<Pomodoro />} />
            <Route path='c' element={<Counter />} />
          </Route>
        </Routes>
      </BrowserRouter></Provider>
  )
}

export default App
