
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/coins/:id' Component={CoinPage}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
