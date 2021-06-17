import React from "react";
import Filter from "../Filter";
import Footer from "../Footer";
import Service from "./Service";

const Services = () => {
  return (
    <div className="services">
      <p className="title">Services</p>
      <Filter />
      <Service />
      <hr />
      <Footer />
    </div>
  );
};

export default Services;
