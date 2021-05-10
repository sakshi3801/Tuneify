import './App.css';
import About from './Components/About/About';
import MyNavbar from './Components/Navbar/MyNavbar.jsx'
import Ambience from './Components/Sounds/Ambience';
function App() {
  return (
    <div className='main'>
    <MyNavbar />
    <About />
    <Ambience />
    </div>
  );
}

export default App;
