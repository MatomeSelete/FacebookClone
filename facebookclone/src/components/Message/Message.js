// import React from 'react'
import React from "react";

import { Messagerearch, OnlineChats, Chats } from "./index";

import "./Message.css";

function Message() {
  return (
    <>
      <Messagerearch />
      <div className="inboxBody">
        <OnlineChats />
        <Chats />
      </div>
    </>
  );
}

export default Message;
