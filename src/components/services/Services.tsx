import React, { useState } from "react";
import useApp from "../../hooks/useApp";
import Filter from "../Filter";
import Footer from "../Footer";
import Copy from "../../assets/copy.svg";
import { useToasts } from "react-toast-notifications";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Services() {
  const { addToast } = useToasts();
  const { filtered, filter, onChange } = useApp();
  const copyText = (code: string) => {
    addToast(`Promo code ${code} copied`, {
      appearance: "success",
      autoDismiss: true,
    });
  };
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
              <CopyToClipboard
                text={service.promoCode}
                onCopy={() => copyText(service.promoCode)}
              >
                <img src={Copy} alt="" />
              </CopyToClipboard>
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
