import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on column headers to filter by heading or use the search box to narrow
        your results.
      </p>
    </header>
  );
};

export default Header;
