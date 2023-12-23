import React from "react";

const SingleMessage = ({message}) => {
    let {content: text, sender} = message;
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-end">
        <span
          className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"
          src="/placeholder.svg?height=40&amp;width=40"
          alt="User Image"
        ></span>
        <div className="ml-4 bg-gray-200 rounded-lg px-4 py-2">
          <p className="text-sm text-gray-900 ">{text}</p>
        </div>
        <div className="mt-2 bg-green-200 rounded-md px-4 py-2 text-xs">{sender?.name}</div>
      </div>
    </div>
  );
};

export default SingleMessage;
