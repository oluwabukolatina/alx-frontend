import React from "react";
import useApp from "../../hooks/useApp";
import Filter from "../Filter";
import Footer from "../Footer";
import Service from "./Service";
export interface ServiceProps {
  name: string;
  description: string;
  promoCode: string;
  id: number;
  activated: boolean;
}

export default function Services() {
  const { filtered, filter, onChange, reset, activateBonus } = useApp();

  const showServices = () => {
    return filtered.map((service) => {
      return (
        <Service
          activateBonus={activateBonus}
          key={service.id}
          service={service}
        />
      );
    });
  };

  return (
    <div className="services">
      <p className="title">Services</p>
      <Filter reset={reset} onChange={onChange} filter={filter} />
      {showServices()}
      <hr />
      <Footer />
    </div>
  );
}
