import React from "react";
import Auth from "pages/auth";
import Message from "components/message";
import "moment/locale/ru";
import DialogItem from "components/dialog-item";
import TypingBlock from "components/typing-block";

function App() {
  return (
    <div className="app">
      {/* <TypingBlock></TypingBlock> */}
      <DialogItem
        userName="Vasilii Ivanov"
        isMyLast={false}
        isRead={true}
        isOnline={false}
        unreadAmount={10}
        date="Sat Feb 07 2020 16:29:41 GMT+0300 (Moscow Standard Time)"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
        eaque velit odit quidem? Quia, dolores dolorum! Nobis dicta itaque
        fugit corrupti possimus exercitationem molestias quis, nihil ipsum,
        unde nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum nihil eaque velit odit quidem? Quia, dolores dolorum!
        Nobis dicta itaque fugit corrupti possimus exercitationem molestias
        quis, nihil ipsum, unde nesciunt? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rerum nihil eaque velit odit quidem?
        Quia, dolores dolorum! Nobis dicta itaque fugit corrupti possimus
        exercitationem molestias quis, nihil ipsum, unde nesciunt?"
        avatar="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
      />

      <DialogItem
        userName="Vasilii Ivanov"
        isMyLast={false}
        isRead={false}
        isOnline={true}
        unreadAmount={1}
        date="Sat Feb 08 2020 16:29:41 GMT+0300 (Moscow Standard Time)"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil
        eaque velit odit quidem? Quia, dolores dolorum! Nobis dicta itaque
        fugit corrupti possimus exercitationem molestias quis, nihil ipsum,
        unde nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rerum nihil eaque velit odit quidem? Quia, dolores dolorum!
        Nobis dicta itaque fugit corrupti possimus exercitationem molestias
        quis, nihil ipsum, unde nesciunt? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rerum nihil eaque velit odit quidem?
        Quia, dolores dolorum! Nobis dicta itaque fugit corrupti possimus
        exercitationem molestias quis, nihil ipsum, unde nesciunt?"
        avatar="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
      />
      {/* <Auth /> */}
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
