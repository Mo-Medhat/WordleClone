import './App.css';
import Home from './Components/Home/Home';
import Keboard from './Components/Keyboard/Keboard';
import { AppContextProvider } from './Components/Context/AppContext';
import { Route, Routes } from 'react-router-dom';

function App() {

  
  return <>
    <nav className='navBar'>
      <h1>WORDLE</h1>
    </nav>
    <AppContextProvider >
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/wordleclone' element={<Home />}/>
    </Routes>
    <Keboard />
    </AppContextProvider>
  </>
}

export default App;
