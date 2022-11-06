import './App.css';
import './Component/Css/base.css'
import './Component/Css/responsive.css'
import Header from './Component/header/Header';
import Home from './Component/pages/Home'
import Shop from './Component/pages/Shop'
import Cart from './Component/pages/Cart'
import Account from './Component/pages/Account'
import Contact from './Component/pages/Contact'
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
                    <li className="header__nav-third-item">
                        <Link to='/shop' className="header__nav-third-link" >Shop</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/cart' className="header__nav-third-link" >Cart</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/contact' className="header__nav-third-link" >Contact</Link>
                    </li>
                    <li className="header__nav-third-item">
                        <Link to='/account' className="header__nav-third-link" >Account</Link>
                    </li>
                </ul>
            </div>
            </div>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/shop' element={<Shop/>}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/account' element={<Account/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
