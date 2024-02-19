import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { commonImg } from '../Commonimage';

const {green,sunny,blue} = commonImg

const FeaturedSecton = (props) => {
const {feature} = props;
  const values = [
  {
    image : green,
    name : "Green thoughts",
    author : "by Paul Rojers",
    buton : "Place a bid",
  },
  {
    image : sunny,
    name : "Sunny Weather",
    author : "by Paul Rojers",
    buton : "Place a bid",
  },
  {
    image : blue,
    name : "Blue mood",
    author : "by Paul Rojers",
    buton : "Place a bid",
  },
]

// const feature = {
//   head: "Featured Collection",
//   subHead  : <p>Enjoy the latest hot <br /> collection</p>
// }

  return (
    <>
<section>
  <div className="container mt-5">
    <h5 className="text-center common_color mt-5">{feature.feature_head}
      {/* Featured Collection */}
    </h5>
  <h2 className="text-center common_text mt-3">{feature.feature_subHead}
      {/* <p>Enjoy the latest hot <br /> collection</p> */}
    </h2>
    <div className="row mt-5 row-cols-1 row-cols-md-3 g-4">
      {/* Card 1 */}
      {values.map((value,index) => (<div className="col">
        <div className="card common_card" key={index}>
          <img
            src={value.image}
            className="border_rad"
            alt="Card Image 1"
          />
          <div className="card-body">
            <h3 className="card-title card_heading mt-2">{value.name}</h3>
            <p className="common_text_color mt-2">{value.author}</p>
            <a href="" className="card_bid">
              <span>
                {value.buton}
                </span>
            </a>
          </div>
        </div>
      </div>))}

      {/* Card 2 
      <div className="col">
        <div className="card common_card">
          <img
            src={sunny}
            className="border_rad"
            alt="Card Image 2"
          />
          <div className="card-body">
            <h3 className="card-title card_heading mt-2">Sunny Weather</h3>
            <p className="common_text_color mt-2">by Paul Rojers</p>
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
            src={blue}
            className="border_rad"
            alt="Card Image 3"
          />
          <div className="card-body">
            <h3 className="card-title card_heading mt-2">Blue mood</h3>
            <p className="common_text_color mt-2">by Paul Rojers</p>
            <a href="" className="card_bid">
              <span>Place a bid</span>
            </a>
          </div>
        </div>
      </div>*/}

    </div>
  </div>
</section>
    <div className="common_pink mt-5 text-center mb-5">
      <span>Browse more →</span>
    </div>
</>
  )
}

export default FeaturedSecton