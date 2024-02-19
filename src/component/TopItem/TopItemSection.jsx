import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopItemSection.css'
import { commonImg } from '../Commonimage';

const {fire,expression,bear,wall,gas} = commonImg

const TopItemSection = () => {
 const top = {
    main_head : "TOP ITEMS",
    subHead  : "Explore awesome artworks",
    browse_more : "Browse more →"
  }

  const data = [{
    image : expression,
    name : "Green thoughts",
    author : "by Paul Rojers",
    buton : "Place a bid",
  },
  {
    image : wall,
    name : "Green thoughts",
    author : "by Dora Anderson",
    buton : "Place a bid", 
  },
  {
    image : bear,
    name : "Green thoughts",
    author : "by Mike Green",
    buton : "Place a bid",
  },
  {
    image : gas,
    name : "Green thoughts",
    author : "by Kate Gray",
    buton : "Place a bid",
  }
]

  return (
        <>
  <section>
    <div className="container">
      <img className="mx-auto d-block mt-5" src={fire} alt="aag" />
      <br />
      <h5 className="text-center common_color mt-3">{top.main_head}
        {/* TOP ITEMS */}
      </h5>
      <h2 className="text-center common_text mt-3">{top.subHead}
        {/* Explore awesome artworks */}
        </h2>
      <div className="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {/* Card 1 */}
        
      
        {data.map((val,idx) => (<div className="col">
          <div className="card common_card" key={idx}>
            <img
              src={val?.image}
              className="border_rad"
              alt="Card Image 1"
            />
            <div className="card-body">
              <h3 className="card-title card_heading">{val.name}</h3>
              <p className="common_text_color">{val.author}</p>
              <a href="" className="card_bid">
                <span>{val.buton}</span>
              </a>
            </div>
          </div>
        </div>))}

        {/* Card 2 
        <div className="col">
          <div className="card common_card">
            <img
              src={wall}
              className="border_rad"
              alt="Card Image 2"
            />
            <div className="card-body">
              <h3 className="card-title card_heading">Green thoughts</h3>
              <p className="common_text_color">by Dora Anderson</p>
              <a href="" className="card_bid">
                <span>Place a bid</span>
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 
        <div className="col">
          <div className="card common_card">
            <img
              src={bear}
              className="border_rad"
              alt="Card Image 3"
            />
            <div className="card-body">
              <h3 className="card-title card_heading">Green thoughts</h3>
              <p className="common_text_color">by Mike Green</p>
              <a href="" className="card_bid">
                <span>Place a bid</span>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 
        <div className="col">
          <div className="card common_card">
            <img
              src={gas}
              className="border_rad"
              alt="Card Image 4"
            />
            <div className="card-body">
              <h3 className="card-title card_heading">Green thoughts</h3>
              <p className="common_text_color">by Kate Gray</p>
              <a href="" className="card_bid">
                <span>Place a bid</span>
              </a>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  </section>
  <div className="common_pink mt-5 mb-5 text-center">
    <span>{top.browse_more} </span>
  </div>
</>

  )
}

export default TopItemSection