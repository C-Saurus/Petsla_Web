import './App.css';
import Header from './components/header/Header';
import Home from './feature/Home/Home'
import { Routes, Route } from 'react-router-dom'
import ProductList from "./feature/Shop/Component/ProductList/index"
import ProductDetails from './feature/Shop/Component/ProductDetails/index';
import Footer from './components/footer/footer';
import Register from './feature/Register/Register'
import Login from './feature/Login/Login';
import CartList from './feature/Cart//Component/CartList';
import { ToastContainer} from 'react-toastify';
import CartPopUp from './components/CartPopUp/';
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
      <CartPopUp />
      <Footer></Footer>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
        <ToastContainer />
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng