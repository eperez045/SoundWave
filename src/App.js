import './App.css';
import NavBar from "./components/NavBar";
import Main from './components/Main';
import Footer from './components/Footer';
import Discover from './components/Discover';
import Join from './components/Join';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Discover />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
