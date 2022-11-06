import './App.css';
import './components/CssBase/base.css'
import './components/CssBase/responsive.css'
import Header from './components/header/Header';
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>PetsLa</title>
      </header>
      <Header></Header>
      <div className="header__nav-third">
            <div className="container">
                <ul className="header__nav-third-list">
                    <li className="header__nav-third-item">
                        <Link to='/' className="header__nav-third-link" >Home</Link>
                    </li>
                    {/* <li className="header__nav-third-item">
                        <Link to='/shop' className="header__nav-third-link" >Shop</Link>
                    </li> */}
                    <li className="header__nav-third-item">
                        <Link to='/cart' className="header__nav-third-link" >Cart</Link>
                    </li>
                    {/* <li className="header__nav-third-item">
                        <Link to='/contact' className="header__nav-third-link" >Contact</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/account' className="header__nav-third-link" >Account</Link>
                    </li> */}
                </ul>
            </div>
            </div>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        {/* <Route  path='/shop' element={<Shop/>}></Route> */}
        <Route  path='/cart' element={<Cart/>}></Route>
        {/* <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/account' element={<Account/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
// Phần comment là phần chưa triển khai code, lúc nào triển khai thì tháo ra mà dùng