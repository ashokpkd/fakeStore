import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import FavouritesPage from './Pages/FavouritesPage';
import ProductPage from './Pages/ProductPage'
function App() {

  return (
 <Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/favourites' element={<FavouritesPage/>} />
    <Route path='/productPage' element={<ProductPage/>} />
    <Route path='/product/:id' element={<ProductPage/>} />
  </Routes>
 </Router>
  );
}

export default App;
