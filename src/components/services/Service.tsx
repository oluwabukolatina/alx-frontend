import React from "react";
import Copy from "../../assets/copy.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToasts } from "react-toast-notifications";
import { ServiceProps } from "./Services";

interface PageProps {
  service: ServiceProps;
  activateBonus: (service: ServiceProps) => void;
}
export default function Service({ service, activateBonus }: PageProps) {
  const { addToast } = useToasts();
  const copyText = (code: string) => {
    addToast(`Promo code ${code} copied`, {
      appearance: "success",
      autoDismiss: true,
    });
  };
  return (
    <div className="service">
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

      <div
        onClick={() => activateBonus(service)}
        style={{ color: service.activated ? "red" : "white" }}
        className="activate"
      >
        {service.activated ? "Activated" : "Activate bonus"}
      </div>
    </div>
  );
}
