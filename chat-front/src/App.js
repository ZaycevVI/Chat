import React from "react";
import Auth from "pages/auth";
import TextMsg from "components/message/text";
import DialogItem from "components/dialog-item";
import TypingBlock from "components/typing-block";
import AudioMsg from "components/message/audio";
import Chat from "components/chat";

function App() {
  

  return (
    <div className="app">
      <Chat ></Chat>

      {/* <TypingBlock name="Vasilii" />
      {dialogs.map(d => (
        <DialogItem
          message={d}
          unreadAmount={Math.floor(Math.random() * 2)}
          isMyLast={getRandomBool()}
        />
      ))}
       */}
      {/* <Auth /> */}
      {/* {messages.map(m => (
        <TextMsg message={m} isMe={getRandomBool()} />
      ))}
       */}
      {/* <AudioMsg
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam culpa magni eaque deleniti quam, non nam, dolorem consectetur fugit consequatur rem voluptatibus architecto atque necessitatibus repellendus incidunt odio quod.",
          date: "Sat Feb 08 2020 16:29:41 GMT+0300 (Moscow Standard Time)",
          isRead: true,

          user: {
            _id: "935f1f77bcf86cd799439011",
            img: null,
            name: "Pasha"
          }
        }}
        isMe={false}
      ></AudioMsg> */}
    </div>
  );
}

export default App;
