import React, { useState } from 'react'
import { Link } from 'react-router-dom'
  export default function Navbar(props) {
    const [isActive, setIsActive] = useState(false);
  
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  return (
    <div>
      <section id="header">
            {/* <img src="C:\Users\kshit\OneDrive\Desktop\desktop\desk\code\react-pro\public\logo192.png" alt="" className="logo"/> */}

            <div>
                <ul id={isActive ? 'navbar active' : 'navbar'}>
                    <li><Link className="active" to="/"><i className="fa-solid fa-house-user"></i> home</Link></li>
                    <li><Link to="/Shop"><i className="fa-solid fa-shop"></i> shop</Link></li>
                    <li><Link to="/"><i className="fa-solid fa-address-card"></i> about</Link></li>
                    <li><Link to="/"><i className="fa-brands fa-blogger"></i> blog</Link></li>
                    <li><Link to="Contact.js"><i className="fa-solid fa-address-book"></i> contact</Link></li>
                    <li><Link id="md-bag" to="/"><i className="fa-solid fa-cart-shopping"></i> cart</Link></li>
                    <li><Link id="md-bag" to="/"><i className="fa-solid fa-moon"></i> Dark Mode</Link></li>
                    <li><Link to="/"><i className="fa-solid fa-address-card"></i></Link></li>
                    <Link to="/" id="close"><i className="fa-solid fa-xmark"></i></Link>
                </ul>
            </div>
            <div id="mobile">
                <Link to="cart.html"><i className="fa-solid fa-bag-shopping"></i></Link>
                <i id="bar" className="fa-solid fa-bars bar" onClick={toggleMenu}></i>
                
            </div>
    </section>
    </div>
  )
}
