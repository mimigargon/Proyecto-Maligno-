import React from 'react'
import "./Bloc.scss";

const Bloc = () => {
  return (
    <div className="blocContainer">
    <div class="blocnotas">
  <div class="top"></div>
  <div class="paper" contenteditable="true">
    Hello, this is a paper.
    Click to write your message.
  </div>
</div>
    </div>
  )
}

export default Bloc