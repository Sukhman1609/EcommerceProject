
import React,{useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useCart } from './Cart/CartContext';

function LinkCompo() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const {cart} = useCart();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const goToCartPage = () => {
    navigate('/cart'); // Navigate to the CartPage
    toggleMenu(); // Close the menu after navigation
  };
  
  console.log('Navbar Component Rendered', cart);
  return (
    <div className='navbar-container'>
      
      <img className='logo' src='https://tse1.mm.bing.net/th?id=OIP.ZxJKzELlJx69HC_0E0qpMAHaFj&pid=Api&P=0&h=180' alt='not available' />
      <h2 className='buy' style={{ color: 'white' }}>Buy with Smile &#128519;</h2>
      <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className='navbar'>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Home</NavLink>

          <div className="dropdown">
          <NavLink to="/mobiles" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Mobiles</NavLink>
          <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Mobiles</li>
              <li><NavLink to="/mobiles/subMi" className='sublist'>Mi</NavLink></li>
              <li><NavLink to="/mobiles/subVivo" className='sublist'>Vivo</NavLink></li>
              <li><NavLink to="/mobiles/subSamsung" className='sublist'>Samsung</NavLink></li>
              <li><NavLink to="/mobiles/subRealme" className='sublist'>Realme</NavLink></li>
              <li><NavLink to="/mobiles/subPoco" className='sublist'>Poco</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/electronics" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Electronics</NavLink>
          <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Electronics</li>
              <li><NavLink to="/store/subLaptops" className='sublist'>Laptops</NavLink></li>
              <li><NavLink to="/store/subAc" className='sublist'>ACs</NavLink></li>
              <li><NavLink to="/store/subKitchen" className='sublist'>Kitchen Products</NavLink></li>
              <li><NavLink to="/store/subTv" className='sublist'>TV/LEDs</NavLink></li>
              <li><NavLink to="/store/subfridge" className='sublist'>Refrigerators</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/iphone" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Iphones</NavLink>
<div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Iphones/Macbook</li>
              <li><NavLink to="/store/subiphone15" className='sublist'>Iphone15</NavLink></li>
              <li><NavLink to="/store/subiphone14" className='sublist'>Iphone14</NavLink></li>
              <li><NavLink to="/store/subiphone13" className='sublist'>Iphone13</NavLink></li>
              <li><NavLink to="/store/subiphone12" className='sublist'>Iphone12</NavLink></li>
              <li><NavLink to="/store/submacbooks" className='sublist'>Macbooks</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
          <NavLink to="/watches" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Watches</NavLink>
<div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Watches</li>
              <li><NavLink to="/store/subapple" className='sublist'>Apple</NavLink></li>
              <li><NavLink to="/store/subWatches" className='sublist'>Titan</NavLink></li>
              <li><NavLink to="/store/subIphones" className='sublist'>Casio</NavLink></li>
              <li><NavLink to="/store/subClothes" className='sublist'>Samsung</NavLink></li>
              <li><NavLink to="/store/subelectronics" className='sublist'>Others</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="dropdown">
            <NavLink to="/store" activeClassName="active" className='Linkstyle' onClick={toggleMenu}>Store</NavLink>
            <div className="dropdown-content">
                <ul>
                  <li style={{color:'coral', fontSize:'20px',fontWeight:'600',textDecoration:'underline'}}>Store</li>
              <li><NavLink to="/store/submobile" className='sublist'>Mobiles</NavLink></li>
              <li><NavLink to="/store/subWatches" className='sublist'>Watches</NavLink></li>
              <li><NavLink to="/store/subIphones" className='sublist'>Iphones</NavLink></li>
              <li><NavLink to="/store/subClothes" className='sublist'>Clothes</NavLink></li>
              <li><NavLink to="/store/subelectronics" className='sublist'>Electronics</NavLink></li>
              </ul>
            </div>
          </div>

        </nav>
        <div className='others'>
        <input type='text' placeholder='search here &#128269;' className='inputsearch' />
        <button style={{ fontSize: '20px',color:'white' }} className='cart' onClick={goToCartPage}>&#128722;({cart.length})</button>
        <button style={{ fontSize: '20px', color: 'white' }} className='like'> &#10084;</button>
        <div className="dropdown"><button className='profile' style={{ fontSize: '30px', color: 'red' }}>👤 &#65039;</button>
        <div className="dropdown-content">
                <ul>
              <li><NavLink to="/login" className='sublist'>Login</NavLink></li>
              <li><NavLink to="/register" className='sublist'>SignUp</NavLink></li>
              <li><NavLink to="/login" className='sublist'>Logout</NavLink></li>
              </ul>
            </div>
          </div></div>
      </div>
    </div>
  );
}

export default LinkCompo;
