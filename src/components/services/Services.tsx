import React from "react";
import useApp from "../../hooks/useApp";
import Filter from "../Filter";
import Footer from "../Footer";
import Copy from "../../assets/copy.svg";

export default function Services() {
  const { filtered, filter, onChange } = useApp();
  const showServices = () => {
    return filtered.map((service) => {
      return (
        <div key={service.id} className="service">
          <div className="service-name-and-description">
            <span className="service-name">{service.name}</span>
            <span className="service-description">{service.description}</span>
          </div>

          <div className="promo-code">
            <p className="promo-heading">PROMOCODE</p>
            <div className="promo">
              <span>{service.promoCode}</span>
              <img src={Copy} alt="" />
            </div>
          </div>

          <div className="activate">Activate bonus</div>
        </div>
      );
    });
  };

  return (
    <div className="services">
      <p className="title">Services</p>
      <Filter onChange={onChange} filter={filter} />
      {showServices()}
      <hr />
      <Footer />
    </div>
  );
}
