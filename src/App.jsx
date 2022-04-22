import './app.scss';
import {useState} from 'react';
import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Works from './components/works/Works';
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <About />
        <Works />
      </div>
    </div>
  );
}

export default App;
