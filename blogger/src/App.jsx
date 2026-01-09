import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth.service.js';
import { login, logout } from './store/authSlice.js';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({userData: user}));
        }else {
          dispatch(logout({userData: user})); 
        }
      })
      .finally(() => setLoading(false));

  }, []);
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return !loading?(
    <div className="min-h-screen flex flex-wrap content-between bg-grey-400">
      <div className='w-full block'> 
        <Header />
        {/* Outlet for rendering child routes */}
        <Outlet />
        <Footer />
      </div>
    </div>
  ): null;
}

export default App;
