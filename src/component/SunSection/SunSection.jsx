import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SunSection.css';
import { commonImg } from '../Commonimage';

const {sun} = commonImg

const SunSection = ({data,but}) => {
  return (
    <section>
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12 col-md-6 text-center">
          {/* Adjust column size for small and medium screens */}
          <img className="rounded-circle img_cir" src={sun} />
        </div>
        <div className="col-sm-12 col-md-6">
          <h5 className="community_head">{data.main_nft}
            {/* ABOUT NFT */}
          </h5>
          <h2 className="common_text mt-3">{data.nft_head}
            {/* Why do you need to buy <br />
            NFT? */}
          </h2>
          <p className="community_text paragraph-with-line-breaks">{data.text}
            {/* A non-fungible token is a unit of data stored on a digital ledger,
            called a blockchain, that certifies a digital asset to be unique and
            therefore not interchangeable. NFTs can be used to represent items
            such as photos, videos, audio, and other types of digital files. */}
          </p>
          <div className="mt-5">
            <a href="#" className="common_btn mt-3">
              {but.btn}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    )
}

export default SunSection