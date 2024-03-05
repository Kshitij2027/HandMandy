import React from 'react'

export default function Productspg(props) {
    let {image, smallimg, pgtitle, title, price, desc} = props;
  return (
    <>
    <div>
      <section id="productdetails" className="section-p1">
        <div className="big-pro-img">
            <img src={image} width="100%" id="main" alt=""/>
            <div className="small-img-group">
                <div className="small-img-col">
                    <img src={smallimg} width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={smallimg} width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={smallimg} width="100%" className="small-img" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src={smallimg} width="100%" className="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div className="pro-details">
            <h6>Home / {pgtitle}</h6>
            <h4 id="pro_det">{title}</h4>
            <h2 id="pro_detail">{price}</h2>
            <select>
                <option>Select Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>2+</option>
            </select>
            <input type="number" value="1"/>
            <button className="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>{desc}</span>
        </div>
    </section>
    <section id="product1">
        <h2 className="ph">FEATURED PRODUCTS</h2>
        <p className="ph">Premium Collection Of Hand Made Decoratives</p>
        <div className="pro-container">
            <div className="pro">
                <img src="/pics/products/p9.jpg" alt=""/>
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
                <img src="/pics/products/p10.jpg" alt=""/>
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
                <img src="/pics/products/p11.jpg" alt=""/>
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
                <img src="/pics/products/p12.jpg" alt=""/>
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
