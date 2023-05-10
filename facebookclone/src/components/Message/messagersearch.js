import React from "react";

import { BiSearch } from "react-icons/bi";

function Messagersearch() {
  return (
    <div>
      <div>
        <image alt="" src={"logo"} />
        <h2>Messager</h2>
      </div>

      <div className="search">
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
