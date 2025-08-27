import './index.css'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-white min-h-screen min-w-fit'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
