import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { commonImg } from '../Commonimage';
import './CartoonSection.css'

const {cartoon,paul} = commonImg;

const CartoonSection = () => {
  return (
    <div>
        <section>
  <div className="container">
    <div className="space">
      <div className="row">
        <div className="col-md-6">
          <img
            src={cartoon}
            alt="monster image"
            className="monster_image img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="start">
            <div>
              <h1 className="info_sec">
                The cartoon <br /> monster <sup>®</sup>
              </h1>
            </div>
            <div className="info mt-5">
              <img src={paul} alt="Rojers" className="paul" />
              <div className="text-info">
                <span className="common_text_color">Creator</span>
                <span className="text-light">Paul Rojers</span>
                <img src="" alt="" />
              </div>
            </div>
            <div className="custom-box mt-4 text-center">
              {" "}
              {/* Using custom class instead of box */}
              <h5 className="current">Current Bid</h5>
              <div>
                <h3 className="eth">1.00 ETH</h3>
              </div>
              <div>
                <h5 className="money">$2,767.77</h5>
              </div>
              <div className="tex">
                A non-fungible token is a unit of data stored on a digital
                ledger.
              </div>
              <div className="mt-md-5 d-flex justify-content-center">
                <a href="" className="place_bid1">
                  <span>Place a bid</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default CartoonSection