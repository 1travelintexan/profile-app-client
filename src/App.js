import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  const handleSignup = (user)=>{
    console.log(user)
  }

  const handleLogin = (user) =>{
    console.log(user)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup}/>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
