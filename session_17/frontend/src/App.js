import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';

function App() {
  return (
    <div>
      <Navbar />
      
    
      <Routes>
        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>
      </Routes>

    </div>
  );
}

export default App;
