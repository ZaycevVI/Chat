import React from "react";
import Auth from "pages/auth";
import TextMsg from "components/message/text";
import DialogItem from "components/dialog-item";
import TypingBlock from "components/typing-block";
import AudioMsg from "components/message/audio";

function App() {
  return (
    <div className="app">
      <TypingBlock name="Vasilii"></TypingBlock>
      <DialogItem
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae harum possimus esse maiores nesciunt culpa. Accusamus numquam non id rerum officiis aliquid laudantium omnis voluptatem, illum beatae architecto dolorum est?",
          date: "Sat Feb 07 2020 16:29:41 GMT+0300 (Moscow Standard Time)",
          isRead: false,

          user: {
            name: "Vasilii Ivanov",
            isOnline: false,
            avatar:
              "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
          }
        }}
        unreadAmount={10}
        isMyLast={false}
      />

      <DialogItem
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae harum possimus esse maiores nesciunt culpa. Accusamus numquam non id rerum officiis aliquid laudantium omnis voluptatem, illum beatae architecto dolorum est?",
          date: "Sat Feb 08 2020 16:29:41 GMT+0300 (Moscow Standard Time)",
          isRead: false,

          user: {
            name: "Igor Pushkin",
            isOnline: true,
            avatar:
              "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"
          }
        }}
        unreadAmount={1}
        isMyLast={true}
      />

      {/* <Auth /> */}
      <TextMsg
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam culpa magni eaque deleniti quam, non nam, dolorem consectetur fugit consequatur rem voluptatibus architecto atque necessitatibus repellendus incidunt odio quod.",
          date: new Date(),
          isRead: true,

          user: {
            _id: "5e4135ea763b6ff7706095f3",
            img:
              "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png",
            name: "Vova"
          }
        }}
        isMe={true}
      />
      <TextMsg
        
        message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam culpa magni eaque deleniti quam, non nam, dolorem consectetur fugit consequatur rem voluptatibus architecto atque necessitatibus repellendus incidunt odio quod.",
          date: new Date(),
          isRead: true,

          user: {
            _id: "507f1f77bcf86cd799439011",
            img: null,
            name: "Pasha",
          }
        }}
        isMe={false}
      />
      <AudioMsg message={{
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus numquam culpa magni eaque deleniti quam, non nam, dolorem consectetur fugit consequatur rem voluptatibus architecto atque necessitatibus repellendus incidunt odio quod.",
          date: "Sat Feb 08 2020 16:29:41 GMT+0300 (Moscow Standard Time)",
          isRead: true,

          user: {
            _id: "507f1f77bcf86cd799439011",
            img: null,
            name: "Pasha",
          }
        }}
        isMe={false}>

      </AudioMsg>
    </div>
  );
}

export default App;
