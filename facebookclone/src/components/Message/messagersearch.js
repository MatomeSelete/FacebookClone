import React from "react";

import { BiSearch } from "react-icons/bi";

function Messagersearch() {
  return (
    <div className="container">
      <div className="search">
      <div>
        <image alt="" src={"logo"} />
        <h2>Messager</h2>
      </div>
        <div className="messangersearch">
          <input type="search" placeholder="Search name, pages" />
          <div className="search__icon">
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagersearch;
