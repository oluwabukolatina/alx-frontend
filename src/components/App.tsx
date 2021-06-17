import React from "react";
import Sidebar from "./Sidebar";
import "../styles/index.css";
import Body from "./Body";
import Services from "./services/Services";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};
export default App;
