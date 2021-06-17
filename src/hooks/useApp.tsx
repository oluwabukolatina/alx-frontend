import { useState } from "react";
import { ServiceData } from "./utils/ServiceData";
const useApp = () => {
  const [services] = useState(ServiceData);
  return { services };
};
export default useApp;
