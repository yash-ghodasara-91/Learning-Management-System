import {BrowserRouter, Router,Route, Routes} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './Components/Nav';
import Index from './Pages/index';

function App() {

  return (
    <>
  <Nav />

  <Routes>
    <Route path='/' element={<Index />}></Route>
  </Routes>
    </>
  )
}

export default App
