
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./pages/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<HomePage/>}/> 
      <Route path="/" element={<LoginPage/>}/> 
      <Route path="/register" element={<RegisterPage/>}/> 
      <Route path="/navbar" element={<NavBar/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
