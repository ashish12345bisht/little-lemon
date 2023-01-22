import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import Footer from './components/common/Footer';
import Booking from './pages/Booking';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/booking' exact={true} element={<Booking />} />
          <Route path='/confirm-booking' exact={true} element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
