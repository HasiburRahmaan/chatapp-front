import { io } from "socket.io-client";
let socket = io("http://localhost:5000");

export function JoinChatRoom(chatId) {
    socket.emit("join_chat", chatId);
}

export function SendNewMessageToChatRoom(message) {
    socket.emit("new_message", message);
}

export function Typing(chatId) {
    socket.emit("typing", chatId);
}

export function TypingStopped(chatId) {
    socket.emit("typing_stopped", chatId);
}

export  {socket};