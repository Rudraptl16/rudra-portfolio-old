import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg selection:bg-dark-primary selection:text-white">
      <div className="star-bg" />
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

