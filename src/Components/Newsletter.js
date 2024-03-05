import React from 'react'
// import PropTypes from 'prop-types'

export default function Newsletter(props) {
  return (
    <div>
      <section id="newsletter"  className="section-m1" >
        <div className="newstext section-p1">
            <h4>Signup For Latest Offers</h4>
            <p>Get E-mail updates about our<span> latest offers </span>and <span>fresh products</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder={props.input}/> 
            <button className="normal">Sign up</button>
        </div>
    </section>
    </div>
  )
}
// Newsletter.PropTypes = { input : 'String',}


