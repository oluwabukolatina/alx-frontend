import React from "react";
import Sidebar from "./Sidebar";
import "../styles/index.css";
import Body from "./Body";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};
export default App;
