import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbars from './component/Navbars';
import Nopage from './pages/Nopage';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="App">
      <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Nopage/>}/>

        </Routes>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
