import './App.css';
import About from './Components/About/About';
import MyNavbar from './Components/Navbar/MyNavbar.jsx'
import Ambience from './Components/Main/Ambience';
import am from './Pages/am'
import we from './Pages/we'
import my from './Pages/my'
import flu from './Pages/flu'
import {Route/*,Link*/} from 'react-router-dom'


function App() {
  return (
    <div className='main'>
    
    <Route path='/' exact component={MyNavbar} />
    <Route path='/' exact component={About} />
    <Route path='/' exact component={Ambience} />
    <Route path='/am' exact component={MyNavbar} />
    <Route path='/am' exact component={am} />
    <Route path='/we' exact component={MyNavbar} />
    <Route path='/we' exact component={we} />
    <Route path='/my' exact component={MyNavbar} />
    <Route path='/my' exact component={my} />
    <Route path='/flu' exact component={MyNavbar} />
    <Route path='/flu' exact component={flu} />
    </div>
  );
}

export default App;
