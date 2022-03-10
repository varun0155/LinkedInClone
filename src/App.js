import './App.css';
import Navbar from './components/Navbar';
// creating a router to make multipage function work
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';

function App() {
  return (
    <div className="App">
      {/* since Navbar has been written outside of the router it is always be rendered */}
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path = "/feed" element = {<Home/>}/>
          <Route exact path = "/Jobs" element = {<Jobs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
