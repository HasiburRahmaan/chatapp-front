import React from "react";

const ChatItem = ({ chat = {}, onClick = () => {} }) => {
  let { users, name, latestMessage } = chat;

  let chatName =
    name?.length > 0 ? name : users.map((user) => user.name).join(", ");
  return (
    <li onClick={onClick} className="cursor-pointer hover:bg-blue-50">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-6 flex items-center space-x-2">
          <div
            className="relative  w-16 h-16 rounded-full border border-1 rounded"
            src="/placeholder.svg"
            alt="User Image"
          ></div>
          <div className="text-sm">
            <h3 className="font-semibold text-gray-900 dark:text-gray-200">
              {chatName}
            </h3>
            <div className="text-xs mt-1">{latestMessage?.content}</div>
          </div>
          <div
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 text-green-500"
            prompt="Online"
          ></div>
        </div>
      </div>
    </li>
  );
};

export default ChatItem;
