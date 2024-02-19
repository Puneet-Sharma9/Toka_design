import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { commonImg } from '../Commonimage';

const {blue} = commonImg

const VideoSection = ({data1}) => {
const value = {
  heading : "GUIDE",
  subHead : "How to create NFT",
}

  return (
<section>
  <div className="container mt-5">
    <h5 className="text-center common_color mt-5">{value.heading}
      {/* GUIDE */}
      </h5>
    <h2 className="text-center common_text mt-3">{value.subHead}
      {/* How to create NFT */}
    </h2>
    <h5 className="creator_text text-center mt-2">{data1.browse}
      {/* Browse dozens of my other extraordinary art collections <br />
      in the world’s largest NFT marketplace. */}
    </h5>
    <img
      src={blue}
      alt="video"
      style={{ width: "100%", height: 600, borderRadius: 50, paddingTop: 25 }}
    />
  </div>
</section>
  )
}

export default VideoSection