import React from 'react';
import Header from './pages/base/Header/Header.jsx';
import AsideIzquierdo from './pages/base/AsideIzquierdo/AsideIzquierdo.jsx';
import AsideDerecho from './pages/base/AsideDerecho/AsideDerecho.jsx';
import Footer from './pages/base/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* PRIVATE ROUTES */}
      <Header />
      <div className="grid gap-2 " style={{gridTemplateColumns: '1fr 2fr 1fr'}}>
        <AsideIzquierdo />
        <main className="right-0 bg-blue-500 h-[100%]">
          <Routes>
            <Route element={<h1>oola</h1>} path="/"></Route>
          </Routes>
        </main>
        <AsideDerecho />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
