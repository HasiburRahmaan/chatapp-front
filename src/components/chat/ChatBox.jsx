import React, { useEffect, useState } from "react";
import { GetData, PostData } from "../../http";
import { MESSAGES_BY_CHAT_ID, SEND_MESSAGES_TO_CHAT } from "../../config/api";
import SingleMessage from "./SingleMessage";
import {
  JoinChatRoom,
  SendNewMessageToChatRoom,
  socket,
} from "../../config/socket";

const ChatBox = ({ chatId }) => {
  let [messages, setMessages] = useState([]);
  let [messageText, setMessageText] = useState("");
  let [typing, setTyping] = useState(false);
  let [isTyping, setIsTyping] = useState(false);
  let [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    setMessages([]);
    if (chatId) {
      getMessages();
    }
  }, [chatId]);

  useEffect(() => {
    socket.on("message_received", (newMessageReceived) => {
      if (newMessageReceived.chat?._id == chatId) {
        setMessages([...messages, newMessageReceived]);
      }
    });
    socket.on("typing_started", (chatId) => {
      if (chatId == chatId) {
        setIsTyping(true);
      }
    });
    socket.on("typing_stopped", (chatId) => {
      if (chatId == chatId) {
        setIsTyping(false);
      }
    });
  });

  let getMessages = async () => {
    let res = await GetData({ api: `${MESSAGES_BY_CHAT_ID}/${chatId}` });

    if (res) {
      setMessages(res?.data?.item);
      JoinChatRoom(chatId);
    }
  };

  let sendMessage = async (e) => {
    e.preventDefault();
    if (chatId && messageText) {
      let body = {
        chatId,
        messageText,
      };
      let res = await PostData({ api: `${SEND_MESSAGES_TO_CHAT}`, body });
      if (res) {
        setMessages([...messages, res.data.item]);
        SendNewMessageToChatRoom(res.data.item);

        setMessageText("");
      }
    }
  };

  let keyPressHandler = (text) => {
    setMessageText(text);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    if(!typing){
      setTyping(true);
      socket.emit("typing_started", chatId);
    }
    let timeout = setTimeout(() => {
      setTyping(false);
      socket.emit("typing_stopped", chatId);
    }, 2000);
    setTypingTimeout(timeout);
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <SingleMessage key={index} message={message} />
        ))}
        {isTyping && (
          <div className="flex flex-col space-y-4 text-xs">Typing...</div>
        )}
      </div>
      {chatId && (
        <div className="border-t border-gray-200 dark:border-gray-700 py-2 px-4 bg-white dark:bg-gray-800">
          <form className="flex space-x-2" onSubmit={sendMessage}>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
              placeholder="Type your message here..."
              value={messageText}
              onChange={(e) => keyPressHandler(e.target.value)}
            />
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
