import './App.css';
import Main from './components/Main';
import Discover from './components/Discover';
import Join from './components/Join';
import logo from './images/logo.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="nav">
            <nav className="navbar">
               <Link to="/" className="nav-link-main" ><img className="logo" src={logo} alt="Logo" /> SoundWave</Link>
                    <ul class="nav-links">
                        <div class="menu">
                            <Link to="/discover"  className="nav-link" >Discover</Link>
                            <Link to="/join"  className="nav-link">Join</Link>
                        </div>
                    </ul>
            </nav>
        </div>
      <Routes>
        <Route path="/" exact element={<Main />}>
        </Route>
        <Route path="/discover" element={<Discover />}>
        </Route>
        <Route path="/join" element={<Join />}>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
