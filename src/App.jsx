import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Create a navigation object to handle route changes
  const navigate = useNavigate();

  // Use useEffect to handle authentication state changes
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // If user is logged in, navigate to home page
      if (user) {
        console.log("Logged In");
        navigate('/');
      } else {
        // If user is logged out, navigate to login page
        console.log("Logged Out");
        navigate('/login');
      }
    });
  }, []);

  return (
    <div>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer theme='dark' />

      {/* Routes for different pages */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;