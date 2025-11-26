import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/Login";
import Cadastro from "./Paginas/Cadastro";
import Apresentacao from './Paginas/Apresentacao';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Apresentacao />} />
        <Route path='Login' element={<Login />} />       
        <Route path='Cadastro' element={<Cadastro />} />       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
