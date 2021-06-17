import { useState } from "react";
import { ServiceData } from "./utils/ServiceData";
const useApp = () => {
  const [services] = useState(ServiceData);
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
  return { filter, onChange, filtered, reset };
};
export default useApp;
