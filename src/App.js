import './App.css';
import About from './Components/About/About';
import MyNavbar from './Components/Navbar/MyNavbar.jsx'
import Ambience from './Components/Sounds/Ambience';
import am from './Pages/am'
import {Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className='main'>
    {/* <MyNavbar />
    <About />
    <Ambience /> */}
    <Route path='/' exact component={MyNavbar} />
    <Route path='/' exact component={About} />
    <Route path='/' exact component={Ambience} />
    <Route path='/am' exact component={MyNavbar} />
    <Route path='/am' exact component={am} />
    </div>
  );
}

export default App;
