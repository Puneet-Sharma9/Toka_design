import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreatorSection.css';
import { commonImg } from '../Commonimage';

const {wallet,collection,nft,sale} = commonImg

const CreatorSection = (props) => {
// const {data1} =props

  const data = [{
    image: wallet, 
    heading: "Set up your wallet",
    text: <p>Praesent vel metus erat. <br /> Vivamus porttitor gravida<br /> arcu nec imperdiet.</p>,
    alts: "wallet"
  }, 
  {
    image: collection, 
    heading: "Create Collection",
    text: <p>Praesent vel metus erat.<br /> Vivamus porttitor gravida <br/> arcu necimperdiet.</p>,
    alts: "Collections image"
  }, 
  {
    image: nft, 
    heading: "Add your NFT",
    text: <p>Praesent vel metus erat. <br /> Vivamus porttitor gravida <br />  arcu nec imperdiet.</p>,
    alts: "nft image"
  }, 
  {
    image: sale, 
    heading: "Start sale",
    text: <p>Praesent vel metus erat. <br /> Vivamus porttitor gravida <br />  arcu nec imperdiet.</p>,
    alts: "sale image"
  }]

  return (
    <div>
        <section>
        <div className="container">
        <h5 className="text-center common_color mt-3">{props.data1.mainHead}</h5>
        <h2 className="text-center common_text mt-3">{props.data1.title}</h2>
        <h5 className="creator_text text-center mt-2">{props.data1.browse}
            {/* Browse dozens of my other extraordinary art collections <br />
            in the world’s largest NFT marketplace. */}
        </h5>
        </div>
        </section>

        <section className="py-5">
  <div className="container">
    <div className="row">
      {data.map((val, idx) => (<div className="col-lg-3">
        <div className="d-flex flex-column align-items-center text-center" key={idx}>
          <img
            src={val?.image}
            className="mb-3 siz"
            alt={val?.alts}
          />
          <h3 className="img_heading">{val.heading}</h3>
          <p className="img_text">{val?.text} </p>
        </div>
      </div>))}
      
      {/* <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src={collection}
            className="mb-3 siz"
            alt="Create Collection"
          />
          <h3 className="img_heading">Create Collection</h3>
          <p className="img_text">
            Praesent vel metus erat. <br />
            Vivamus porttitor gravida <br />
            arcu nec imperdiet.
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center text-center">
          <img src={nft} className="mb-3 siz" alt="Add your NFT" />
          <h3 className="img_heading">Add your NFT</h3>
          <p className="img_text">
            Praesent vel metus erat. <br />
            Vivamus porttitor gravida <br />
            arcu nec imperdiet.
          </p>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="d-flex flex-column align-items-center text-center">
          <img src={sale} className="mb-3 siz" alt="Start sale" />
          <h3 className="img_heading">Start sale</h3>
          <p className="img_text">
            Praesent vel metus erat. <br />
            Vivamus porttitor gravida <br />
            arcu nec imperdiet.
          </p>
        </div>
      </div> */}
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <a href="#" className="common_btn mt-5">{props.but.btn}
      {/* Start Now */}
    </a>
  </div>
</section>

    </div>
  )
}

export default CreatorSection
