import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CommunitySection.css';
import { commonImg } from '../Commonimage';

const {circle} = commonImg

const CommunitySection = ({data}) => {
  return (
    <section>
  <div className="container">
    <div className="row">
      <div className="col-md-6" style={{ marginTop: 40 }}>
        <h5 className="community_head">{data.main_commun}
          {/* Our Community */}
          </h5>
        <h2 className="common_text mt-3">{data.community_head}
          {/* Want to join the creative community? */}
        </h2>
        <p className="community_text">{data.text}
          {/* A non-fungible token is a unit of data stored on a digital ledger,
          called a blockchain, that certifies a digital asset to be unique and
          therefore not interchangeable. NFTs can be used to represent items
          such as photos, videos, audio, and other types of digital files. */}
        </p>
        <div className="load_more mt-5">
          <span>Load more →</span>
        </div>
      </div>
      <div className="col-md-6 circle text-center">
        <img id="scalingImage" src={circle} />
      </div>
    </div>
  </div>
</section>
    )
}

export default CommunitySection