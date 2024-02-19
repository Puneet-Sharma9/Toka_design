import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateSection.css';
import { commonImg } from '../Commonimage';

// console.log(commonImg, "test");
const {purple, pink,orange,purplelight,darkorange} = commonImg





const CreateSection = ({data,but}) => {
  return (
    <section class="create" style={{ marginTop: 80 }}>
    <div className="container ">
        <div className="row">
        <div className="col-md-3">
            {/* Content for the first column */}
            <img className="pur" src={purple} alt="Image 1" height="50px" width="50px"
            />
            <br />
            <br />
            <img className="pin" src={pink} alt="Image 2" height="40px" width="40px"
            />
            <br />
            <br />
            <img className="ora" src={orange} alt="Image 3" height="44px" width="44px"
            />

            <br />
            {data?.extraImage && <img className="pink" src={pink} alt="Image 1" height="33px" width="33px"
        />}
        </div>
        <div className="col-md-6 mt-5 text-center">
            <h5 className="common_color mb-2">{data?.heading}</h5>
            <div className="common_text">{data?.description}</div>
            <div className="d-flex justify-content-center">
            <a href="#" className="common_btn mt-3">
                {but?.btn}
            </a>
            </div>
        </div>
        <div className="col-md-3">
            <img className="purple" src={purplelight} alt="Image 1" height="33px" width="33px"
            />
            <br />
            <img className="pink" src={pink} alt="Image 2" height="50px" width="50px"
            />
            <br />
            <br />
            <img className="orange" src={darkorange} alt="Image 3" height="48px" width="48px"
            />
            <br />
            {data?.extraImage && <img className="purple" src={purplelight} alt="Image 1" height="33px" width="33px"
        />}
        </div>
        </div>
    </div>
    </section>
  )
}

export default CreateSection

