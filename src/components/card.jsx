import React from 'react';
import Card1 from "../assets/images/placement1.png";
import Card2 from "../assets/images/card2.jpg";
import Card3 from "../assets/images/card3.jpg";
import "../assets/css/card.css";

export default function Card() {

  return (
    <div className="card-container">
      <div className="card-group">
        <div className="card">
          <img src={Card1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Placements</h5>
            <p className="card-text"></p>
            <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-primary">Click to Know More</button>
            </small></p>
          </div>
        </div>
        <div className="card">
          <img src={Card2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">College Study Material</h5>
            <p className="card-text"></p>
            <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-primary">Click to Know More</button>
</small></p>
          </div>
        </div>
        <div className="card">
          <img src={Card3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Important Algos</h5>
            <p className="card-text"></p>
            <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-primary">Click to Know More</button>
</small></p>
          </div>
        </div>
      </div>
    </div>

  )

}