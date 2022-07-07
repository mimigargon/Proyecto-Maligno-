import React from "react";
import laptop from "../../../images/laptop.png";
import iphone from "../../../images/iphone.png";
import computer from "../../../images/computer.png";
import gun from "../../../images/gun.png";
import olddisk from "../../../images/disk.png";
import knife from "../../../images/knife.png";
import "./Stolen-goods.scss";

function StolenGoods() {
  let lastHole;
  let pcOrNot;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
  function peep() {
    const holes = document.querySelectorAll(".hole");
    const time = randomTime(500, 2000);
    const hole = randomHole(holes);
    pcOrNot = Math.floor(Math.random() * 2) + 1;
    hole.classList.add(pcOrNot === 1 ? "up" : "down");
    setTimeout(() => {
      hole.classList.remove("up", "down");
      if (!timeUp) peep();
    }, time);
  }
  function startGame() {
    const pcs = document.querySelectorAll(".pc");
    const others = document.querySelectorAll(".other");
    pcs.forEach((pc) => pc.addEventListener("click", bonk));
    others.forEach((other) => other.addEventListener("click", debonk));
    const scoreBoard = document.querySelector(".score");
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => (timeUp = true), 30000);
  }
  function bonk(e) {
    const scoreBoard = document.querySelector(".score");
    if (!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove("up");
    scoreBoard.textContent = score;
  }
  function debonk(e) {
    const scoreBoard = document.querySelector(".score");
    if (!e.isTrusted) return; // cheater!
    score--;
    this.parentNode.classList.remove("down");
    scoreBoard.textContent = score;
  }

  return (
    <div className="container">
      <h1>Whack-a-PC!</h1>
      <div className="description">
        Durante 30 segundos deberás capturar cualquier elemento parecido o que
        pertenezca a un ordenador.
      </div>
      <div className="result">
        Score: <span className="score">0</span>
      </div>
      <button className="startBtn" onClick={startGame}>
        Start!
      </button>
      <div className="game">
        <div className="hole hole1">
          <div className="pc" id="pc">
            <div className="laptop">
              <img src={laptop} alt="Laptop"></img>
            </div>
          </div>
          <div className="other">
            <div className="phone">
              <img src={iphone} alt="phone" />
            </div>
          </div>
        </div>
        <div className="hole hole2">
          <div className="pc" id="pc">
            <div className="computer">
              <img src={computer} alt="Computer" />
            </div>
          </div>
          <div className="other">
            <div className="gun">
              <img src={gun} alt="gun" />
            </div>
          </div>
        </div>
        <div className="hole hole3">
          <div className="pc" id="pc">
            <div className="laptop">
              <img src={laptop} alt="Laptop" />
            </div>
          </div>
          <div className="other">
            <div className="phone">
              <img src={iphone} alt="phone" />
            </div>
          </div>
        </div>
        <div className="hole hole4">
          <div className="pc" id="pc">
            <div className="olddisk">
              <img src={olddisk} alt="olddisk" />
            </div>
          </div>
          <div className="other">
            <div className="knife">
              <img src={knife} alt="knife" />
            </div>
          </div>
        </div>
        <div className="hole hole5">
          <div className="pc" id="pc">
            <div className="computer">
              <img src={computer} alt="Computer" />
            </div>
          </div>
          <div className="other">
            <div className="phone">
              <img src={iphone} alt="phone" />
            </div>
          </div>
        </div>
        <div className="hole hole6">
          <div className="pc" id="pc">
            <div className="laptop">
              <img src={laptop} alt="Laptop" />
            </div>
          </div>
          <div className="other">
            <div className="gun">
              <img src={gun} alt="gun" />
            </div>
          </div>
        </div>
        <div className="hole hole7">
          <div className="pc" id="pc">
            <div className="olddisk">
              <img src={olddisk} alt="olddisk" />
            </div>
          </div>
          <div className="other">
            <div className="gun">
              <img src={gun} alt="gun" />
            </div>
          </div>
        </div>
        <div className="hole hole8">
          <div className="pc" id="pc">
            <div className="olddisk">
              <img src={olddisk} alt="olddisk" />
            </div>
          </div>
          <div className="other">
            <div className="knife">
              <img src={knife} alt="knife" />
            </div>
          </div>
        </div>
        <div className="hole hole9">
          <div className="pc" id="pc">
            <div className="computer">
              <img src={computer} alt="Computer" />
            </div>
          </div>
          <div className="other">
            <div className="knife">
              <img src={knife} alt="knife" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StolenGoods;
