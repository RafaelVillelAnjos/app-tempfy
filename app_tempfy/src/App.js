import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Paginas/Login";
import Cadastro from "./Paginas/Cadastro";
import Apresentacao from './Paginas/Apresentacao';
import Produtos from './Paginas/Produtos';
import PlanoUm from './Paginas/PlanoUm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Apresentacao />} />
        <Route path='Login' element={<Login />} />       
        <Route path='Cadastro' element={<Cadastro />} />       
        <Route path='Produtos' element={<Produtos />} />
        <Route path='PlanoUm' element={<PlanoUm />} />            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
