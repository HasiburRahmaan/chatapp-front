let HOST = "http://localhost:5000"


export const REGISTRATION = `${HOST}/api/auth/registration`
export const LOGIN = `${HOST}/api/auth/login`
export const VERIFY = `${HOST}/api/auth/verify`



export const CHAT_LIST = `${HOST}/api/chat/get-all-chat-rooms`

export const SEND_MESSAGES_TO_CHAT = `${HOST}/api/message/send-message`
export const MESSAGES_BY_CHAT_ID = `${HOST}/api/message/get-messages/by-chatId` /* /{chatId} */
