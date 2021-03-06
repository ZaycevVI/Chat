import React from "react";
import Auth from "pages/auth";
import Home from "pages/home";
import AuthRequired from "hocs/auth-required";
import NoAuthRequired from "hocs/no-auth-required";
import ErrorHandler from "hocs/error-handler";
import userService from 'services/user-service';
// import AudioMsg from 'components/message/audio';

function App() {
  return (
    <div className="app">
      <ErrorHandler>
        <NoAuthRequired>
          <Auth></Auth>
        </NoAuthRequired>
        <AuthRequired>
          <Home></Home>
        </AuthRequired>
      </ErrorHandler>
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
