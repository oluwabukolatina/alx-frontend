import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <span className="balance">Balance</span>
        <span>213 920$</span>
      </div>
      <div className="header-item">
        <span className="payout">Payout</span>
        <span>159 465$</span>
      </div>
    </div>
  );
};

export default Header;
