import React from 'react';
import "./Main.scss";

const Main = () => {
  return (
    <div class="wrapper crt">
  <div class="quote ui-box">
        <p>In 2077 they voted Night City the worst place to live in America. Main issues: sky high rate of violence, and more people living below the poverty line than anywhere else.</p>
        <p>Can't deny it, it's all true.  But everybody still wants to live here.  This city's always got a promise for you.  Might be a lie, an illusion.  But it's there.  Just around the corner.  And it keeps you going.</p>
        <p>It's a city of dreams, and I'm a big dreamer.</p>
        <p> - V</p>
  </div>
  <div class="chat ui-box">
    <div class="chat-sent">
      <div class='message message-outgoing'>
        <div class="message-avatar ui-box">V</div>
        <div class="message-text ui-box">La web de maligno</div>
      </div>
      <div class='message message-incoming'>
        <div class="message-text ui-box">A test of what?</div>
        <div class="message-avatar ui-box">M</div>
      </div>
      <div class='message message-outgoing'>
        <div class="message-avatar ui-box">V</div>
        <div class="message-text ui-box">This is just a test.</div>
      </div>
      <div class='message message-incoming'>
        <div class="message-text ui-box">A test of what?</div>
        <div class="message-avatar ui-box">M</div>
      </div>
      <div class='message message-outgoing'>
        <div class="message-avatar ui-box">V</div>
        <div class="message-text ui-box">This is just a test.</div>
      </div>
      <div class='message message-incoming'>
        <div class="message-text ui-box">A test of what?</div>
        <div class="message-avatar ui-box">M</div>
      </div>
    </div>
    <div class="chat-textbox">
      <textarea class="chat-textarea ui-box crt">
      </textarea>
    </div>
  </div>
  <div class="cube ui-box">
  </div>
</div>
  )
}

export default Main;