import React from "react";
import './style.scss'
import getAvatar from "helpers/avatar-generator";

function Avatar({ user }) {
  return (
    <>
      {user.avatar ? (
        <img src={user.avatar} alt="avatar"></img>
      ) : (
        <div
          className="random-avatar"
          style={{
            background: `linear-gradient(${getAvatar(user._id).join(",")})`
          }}
        >
          {user.name && user.name[0].toUpperCase()}
        </div>
      )}
    </>
  );
}

export default Avatar;
