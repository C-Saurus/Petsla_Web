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
import Profile from "./feature/Account/Profile";
import Orders from "./feature/Account/Orders"
import Wishlist from "./feature/Account/WishList"
import { ToastContainer } from "react-toastify";
import Missing from "./feature/Missing"
import EntirePage from "./feature/Cart/pages/EntirePage";
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
        <Route path="/account/profile" element={<Profile />} ></Route>
        <Route path="/account/orders" element={<Orders />} ></Route>
        <Route path="/account/wishlist" element={<Wishlist />} ></Route>
      </Routes>
      <CartPopUp />
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng
