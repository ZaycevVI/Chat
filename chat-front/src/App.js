import React from "react";
import Auth from "pages/auth";
import Message from "components/message";
import "moment/locale/ru";

function App() {
  return (
    <div className="app">
      <Auth />
      {/* <Message
        img="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
        eaque velit odit quidem? Quia, dolores dolorum! Nobis dicta itaque
        fugit corrupti possimus exercitationem molestias quis, nihil ipsum,
        unde nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum nihil eaque velit odit quidem? Quia, dolores dolorum!
        Nobis dicta itaque fugit corrupti possimus exercitationem molestias
        quis, nihil ipsum, unde nesciunt? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rerum nihil eaque velit odit quidem?
        Quia, dolores dolorum! Nobis dicta itaque fugit corrupti possimus
        exercitationem molestias quis, nihil ipsum, unde nesciunt?"
        isRead={true}
        isMe={true}
        date={new Date()}
      /> */}
    </div>
  );
}

export default App;
