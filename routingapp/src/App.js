
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import {Navbar}  from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';

function App() {

  return (
       <>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
       </>
  );
}

export default App;
