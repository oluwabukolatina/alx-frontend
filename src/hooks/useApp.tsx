import { useState } from "react";
import { ServiceProps } from "../components/services/Services";
import { ServiceData } from "./utils/ServiceData";
const useApp = () => {
  const [services, setServices] = useState(ServiceData);
  const [filtered, setFiltered] = useState(ServiceData);
  const [filter, setFilter] = useState("");
  const onChange = (e: { target: { value: string } }) => {
    setFilter(e.target.value.toLowerCase());

    const list = services.filter((service) => {
      if (
        service.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      ) {
        return service;
      }
    });
    setFiltered(list);
  };
  const reset = () => {
    setFiltered(services);
  };
  const activateBonus = (params: ServiceProps) => {
    const newData = filtered.map((se: ServiceProps) => {
      return {
        id: params.id === se.id ? params.id : se.id,
        name: params.id === se.id ? params.name : se.name,
        description: params.id === se.id ? params.description : se.description,
        promoCode: params.id === se.id ? params.promoCode : se.promoCode,
        activated: params.id === se.id ? !params.activated : se.activated,
      };
    });
    setFiltered(newData);
    setServices(newData);
  };
  return { filter, onChange, filtered, reset, activateBonus };
};
export default useApp;
