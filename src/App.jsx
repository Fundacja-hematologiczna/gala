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
import NotFound from './pages/NotFound';

import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import Cookies from './components/Cookies/Cookies';
import { ScrollToHash } from './ScrollToHash';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} index />
            <Route path="/rejestracja" element={<Registry />} />
            <Route path="/Place" element={<Place />} />
            <Route path="/Program" element={<Program />} />
            <Route path="/Auction" element={<Auction />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/klauzula-informacyjna" element={<Klauzula />} />
            <Route path="/regulamin" element={<Regulamin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Footer />
        <ScrollToHash />
        <Cookies />
      </HashRouter>
    </>
  );
}

export default App;
