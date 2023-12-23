import React, { useEffect, useState } from "react";
import { GetData, PostData } from "../../http";
import { MESSAGES_BY_CHAT_ID, SEND_MESSAGES_TO_CHAT } from "../../config/api";
import SingleMessage from "./SingleMessage";

const ChatBox = ({ chatId }) => {
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([]);
    if (chatId) {
      getMessages();
    }
  }, [chatId]);

  let getMessages = async () => {
    let res = await GetData({ api: `${MESSAGES_BY_CHAT_ID}/${chatId}` });

    if (res) {
      setMessages(res?.data?.item);
      console.log(res.data);
    }
  };

  let sendMessage = async (e) => {
    e.preventDefault();
    if (chatId && e.target[0].value) {
      let body = {
        chatId,
        messageText: e.target[0].value,
      };
      let res = await PostData({ api: `${SEND_MESSAGES_TO_CHAT}`, body});
      if (res) {
        console.log(res.data);
        setMessages([...messages, res.data.item]);
      }
    }
  };

  return (
    <div className="flex flex-grow flex-col">
      <div className="flex-grow overflow-auto p-4">
        {messages.map((message, index) => (
          <SingleMessage key={index} message={message} />
        ))}
      </div>
      {chatId && (
        <div className="border-t border-gray-200 dark:border-gray-700 py-2 px-4 bg-white dark:bg-gray-800">
          <form className="flex space-x-2" onSubmit={sendMessage}>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
              placeholder="Type your message here..."
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
