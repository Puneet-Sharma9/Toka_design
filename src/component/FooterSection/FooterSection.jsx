import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterSection.css';

const FooterSection = () => {
  return (
<footer className="bg-dark text-center text-white py-4 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 text-start footer_text">
        <h5 className="logo">Toka</h5>
        <p>
          Reinventing the way of creating websites, we aim to create the most
          master-peaced WordPress theme available on the market.
        </p>
      </div>
      <div className="col-md-4 text-start footer_text">
        <h5>CONTACT US</h5>
        <address>
          202 Helga Springs Rd, Crawford, TN 38554 <br />
          Call Us: 800.275.8777 <br />
          alex@company.com
        </address>
      </div>
      <div className="col-md-4 text-start">
        <h5 className="mb-3">SIGN UP FOR EMAIL UPDATES</h5>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your e-mail address"
          />
          <button className="btn_foot">Subscribe</button>
        </div>
        <p>Sign up with your email address to receive news and updates</p>
      </div>
    </div>
    <hr />
    <div className="row d-flex justify-content-between align-items-center">
      <div className="col-md-6">
        <div className="copyright_ba">
          <span>© 2024 Toka. All rights reserved.</span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="navbar-items text-md-end">
          <div className="bottom-heading">
            <ul className="list-unstyled d-flex justify-content-md-end">
              <li>
                <a href="#" className="foot-li">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="foot-li">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="foot-li">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="foot-li">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="foot-li">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="foot-li">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default FooterSection