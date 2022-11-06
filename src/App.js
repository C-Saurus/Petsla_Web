import './App.css';
import './asset/fonts/fontawesome-free-6.1.1-web/css/all.min.css'
import './asset/styles/base.css'
import './asset/styles/grid.css'
import { Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList/index"
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>PetsLa</title>
      </header>
      <div>
        <Routes>
          <Route path="/shop" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
