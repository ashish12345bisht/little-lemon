import './App.css';
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
