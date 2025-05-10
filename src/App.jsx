import Home from './pages/Home/Home';
import Registry from './pages/Registry/Registry';
import Place from './pages/Place/Place';
import Program from './pages/Program/Program';
import Auction from './pages/Auction/Auction';
import Contributors from './pages/Contributors/Contributors';
import Contact from './pages/Contact/Contact';
import Klauzula from './pages/Klauzula/Klauzula';
import Gallery from './pages/Gallery/Gallery';
import Regulamin from './pages/Regulamin/Regulamin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Admin from './pages/Admin/Admin';

import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';

import Cookies from './components/Cookies/Cookies';
import { ScrollToHash } from './pages/ScrollToHash';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/rejestracja" element={<Registry />} />
            <Route path="/miejsce" element={<Place />} />
            <Route path="/program" element={<Program />} />
            <Route path="/aukcja" element={<Auction />} />
            <Route path="/darczyncy" element={<Contributors />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/klauzula-informacyjna" element={<Klauzula />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Footer />
        <ScrollToHash />
        <Cookies />
      </BrowserRouter>
    </>
  );
}

export default App;
