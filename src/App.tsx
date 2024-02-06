import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';


import './App.css'
import Delet from './components/categorias/delet/Delet';
import Form from './components/categorias/form/Form';
import FormP from './components/produtos/formp/FormP';
import Lista from './components/categorias/lista/Lista';
import DeletP from './components/produtos/deletp/DeleteP';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/produtos" element={<Lista />} />
            <Route path="/cadastrarproduto" element={<FormP />} />
            <Route path="/editarproduto/:id" element={<FormP />} />
            <Route path="/deletarproduto/:id" element={<DeletP />} />
            <Route path="/categorias" element={<Lista />} />
            <Route path="/cadcategoria" element={<Form />} />
            <Route path="/editarcategoria/:id" element={<Form />} />
            <Route path="/deletarcategoria/:id" element={<Delet />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
