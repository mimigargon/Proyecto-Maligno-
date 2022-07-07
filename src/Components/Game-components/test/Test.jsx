import React from 'react'
import "./test.scss"

function test() {
  return (
    <>
        <div id="game">
    <div id="start-spot"></div>
    <div class="wall-left"></div>
    <div class="wall-right"></div>

    <div id="gameover"><h1>You lose</h1></div>
    <div id="win"><h1>Congratulations !<br/>You win</h1></div>
  </div>

  <p class="instructions">
    Place your cursor on the white dot to start.<br/>
    Avoid the walls and escape !
  </p>

    </>
  )
}

export default test