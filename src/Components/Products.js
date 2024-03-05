import React from 'react'
import { Link } from 'react-router-dom'
export default function Products() {
    // const navigate = useNavigate();
    // function send(){
    //     navigate("Productspg")
    // }
  return (
    <>
    <div>
      <section id="product1">
        <h2 className="ph">FEATURED PRODUCTS</h2>
        <p className="ph">Premium Collection Of Hand Made Decoratives</p>
        <div className="pro-container">
            <div className="pro">
                <Link to={'Shop/Productspg'}><img src="pics/products/p5.jpg" alt="" /></Link>
                <div className="des">
                    <span>Pottery</span>
                    <h5>Classic Ancient Style Pot</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p6.jpeg" alt=""/>
                <div className="des">
                    <span>Pottery</span>
                    <h5>Classic Modern touch Pot</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p7.jpg" alt=""/>
                <div className="des">
                    <span>Paints</span>
                    <h5>Classic Portraits</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p8.jpg" alt=""/>
                <div className="des">
                    <span>Footwear</span>
                    <h5>Classic Rubber Slippers</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p9.jpg" alt=""/>
                <div className="des">
                    <span>Pot</span>
                    <h5>Classic Earthen pots</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p10.jpg" alt=""/>
                <div className="des">
                    <span>Buckle</span>
                    <h5>Classic Stainless-steel Buckle</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p11.jpg" alt=""/>
                <div className="des">
                    <span>Keyring</span>
                    <h5>Classic Key-Ring</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
            <div className="pro">
                <img src="pics/products/p12.jpg" alt=""/>
                <div className="des">
                    <span>Tooran</span>
                    <h5>Classic Decorative Tooran</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="ph">Rs.80</h4>
                </div>
                <a href="/"><i className="fa-solid fa-cart-shopping cart"></i></a>
            </div>
        </div>
    </section>
    </div>
  </>
  )
}
