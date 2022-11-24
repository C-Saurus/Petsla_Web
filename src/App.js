import "./App.css";
import Header from "./components/Header/Header";
import Home from "./feature/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./feature/Shop/component/ProductList";
import ProductDetails from "./feature/Shop/component/ProductDetails";
import Footer from "./components/Footer";
import Register from "./feature/Register/Register";
import Login from "./feature/Login/Login";
import CartPopUp from "./components/CartPopUp/CartPopUpList";
import { ToastContainer } from "react-toastify";
import Missing from "./feature/Missing"
import EntirePage from "./feature/Cart/pages/EntirePage";
import ScrollToTop from "./components/ScrollToTop";
import AccountPage from './feature/Account/AccountPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>PetsLa</title>
      </header>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Missing />}></Route>
        <Route path="/cart" element={<EntirePage />}></Route>
        <Route path="/customer-info" element={<EntirePage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route  path='/contact' element={<Contact/>}></Route> */}
        <Route path="/account/profile" element={<AccountPage />} ></Route>
        <Route path="/account/orders" element={<AccountPage />} ></Route>
        <Route path="/account/wishlist" element={<AccountPage />} ></Route>
      </Routes>
      <CartPopUp />
      
      <Footer></Footer>
      <ToastContainer/>
      <ScrollToTop />
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng
