// import React from 'react'
import React from "react";

import { Messagerearch, OnlineChats, Chats, Inbox } from "./index";

import "./Message.css";

function Message() {
  return (
    <>
      <Messagerearch />
      <div className="inboxBody  ">
        {/* <OnlineChats /> */}
        <Chats />
        <Inbox />
      </div>
    </>
  );
}

export default Message;
