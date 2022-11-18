import "./App.css";
import Header from "./components/Header/Header";
import Home from "./feature/Home";
import { Routes, Route } from "react-router-dom";
import ProductList from "./feature/Shop/component/ProductList";
import ProductDetails from "./feature/Shop/component/ProductDetails";
import Footer from "./components/Footer";
import Register from "./feature/Register/Register";
import Login from "./feature/Login/Login";
import CartList from "./feature/Cart/components/CartList";
import CartPopUp from "./components/CartPopUp/CartPopUpList";
import Profile from "./feature/Account/Profile";
import { ToastContainer } from "react-toastify";

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
        <Route>404 Not Found!</Route>
        <Route path="/cart" element={<CartList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route  path='/contact' element={<Contact/>}></Route> */}
        <Route path="/account/profile" element={<Profile />}></Route>
      </Routes>
      <CartPopUp />
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng
