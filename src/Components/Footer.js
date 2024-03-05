import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="section-p1">
        <div class="col">
            <img src="" alt=""/>
            <p><strong>Address:</strong> GGITS,Tilwara Road,Jabalpur</p>
            <p><strong>Phone:</strong>+91 1234567890/+11 1234567890</p>
            <p><strong>Hours:</strong>10:00 AM - 6:00 PM, Mon - Fri</p>
        <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
                <i class="fa-brands fa-instagram icon"></i>
                <i class="fa-brands fa-facebook icon"></i>
                <i class="fa-brands fa-whatsapp"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="/">About Us</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Poicy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Contact Us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="/">Sign In</a>
        <a href="/">View Cart</a>
        <a href="/">My Wishlist</a>
        <a href="/">Track My Order</a>
        <a href="/">Help</a>
    </div>
    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play Store</p>
        <div class="row">
            <img src="pics/products/app.jpg" alt=""/>
            <img src="pics/products/play.jpg" alt=""/>
            <p>Secure Payment Gateways</p>
            <img src="pics/products/pay.png" alt=""/>
        </div>
    </div> 
    </footer>
    </div>
  )
}
