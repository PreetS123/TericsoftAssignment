
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BMIPage } from './Pages/BMIPage';
import { HomePage } from './Pages/HomePage';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}   />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/bmi' element={<BMIPage/>} />
        {/* <Route  /> */}
        {/* <Route  /> */}
      </Routes>
    </div>
  );
}

export default App;
