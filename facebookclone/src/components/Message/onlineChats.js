import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Ciara from "../images/Ciara.jpeg";
import Leo from "../images/Leo.jpeg";
import Matome from "../images/Matome.jpg";
import Sarra from "../images/Sarra.jpeg";
import tic from "../images/ticTacToe.png";

function OnlineChats() {
  return (
    <div className="container ">

      <div className="OnlineChats___cards overflow-x-auto">

        <div className=" card ">
          <div className="card-body">
            <img src={Ciara} alt="..." />
          </div>
        </div>

        <div class=" card">
          <div class="card-body">
            <p class="card-text">
              <img src={Leo} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <p class="card-text">
              <img src={Matome} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <p class="card-text">
              <img src={Sarra} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>

          <div class="card">
          <div class="card-body">
            <p class="card-text">
              <img src={Sarra} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>

       {/* <div class="card">
          <div class="card-body">
            <p class="card-text">
              <img src={Leo} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <p class="card-text">
              <img src={Matome} class="card-img-top" alt="..." />
            </p>
          </div>
        </div>  */}
         
      </div>
    </div>
  );
}

export default OnlineChats;
