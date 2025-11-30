import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;