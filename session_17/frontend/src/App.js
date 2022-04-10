import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Home from './components/Home.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      
    
      <div id="main-cont">
        <Routes>
          <Route path="/login" element={ <Login />}/>
          <Route path="/register" element={ <Register />}/>
          <Route path="/" element={ <Home />}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
