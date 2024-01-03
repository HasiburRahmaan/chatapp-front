import React, { useEffect, useState } from "react";
import { GetData } from "../http";
import { CHAT_LIST, HOST } from "../config/api";
import ChatItem from "../components/chat/ChatItem";
import ChatBox from "../components/chat/ChatBox";
import { socket } from "../config/socket";



const Chat = () => {
  let [chatList, setChatList] = useState([]);
  let [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
    });
  }, []);

  useEffect(() => {
    getChatList();
  }, []);

  let getChatList = async () => {
    let res = await GetData({ api: CHAT_LIST });

    if (res) {
      setChatList(res?.data?.item);
    }
  };

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="w-full h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 md:px-6">
        <h1 className="text-lg font-semibold tracking-tighter text-gray-900 dark:text-gray-200">
          Chat
        </h1>
      </header>
      <div className=" grow flex ">
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <nav className="space-y-1 p-4">
            <h2 className="text-gray-900 dark:text-gray-200 text-lg font-semibold mb-2">
              Contacts
            </h2>
            <ul className="space-y-2">
              {chatList.map((chat, index) => (
                <ChatItem
                  chat={chat}
                  key={index}
                  onClick={() => setSelectedChat(chat._id)}
                />
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex flex-grow flex-col">
          <ChatBox chatId={selectedChat} />
        </main>
      </div>
    </div>
  );
};

export default Chat;
