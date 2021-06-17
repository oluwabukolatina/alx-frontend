import React from "react";
import Copy from '../../assets/copy.svg';
const Service = () => {
  return (
    <div className="service">
      <div className="service-name-and-description">
        <span className="service-name">Site constructor</span>
        <span className="service-description">description</span>
      </div>

      <div className="promo-code">
        <p className="promo-heading">Promocode</p>
        <div className="promo">
          <span>promodoe</span>
          <img src={Copy} alt="" />
        </div>
      </div>

      <div className="activate">Activate bonus</div>
    </div>
  );
};

export default Service;
