import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList/index"
import ProductDetails from './components/ProductDetails';
import Footer from './components/footer/footer';
import Register from './components/header/Register/Register'
import Login from './components/header/Login/Login';
import CartList from './components/pages/Cart/CartList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>PetsLa</title>
      </header>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
        <Route path='/cart' element={<CartList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        {/* <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/account' element={<Account/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng