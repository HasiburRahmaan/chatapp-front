import React from "react";

const Chat = () => {
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
              <li>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="p-6 flex items-center space-x-2">
                    <span
                      className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"
                      src="/placeholder.svg?height=40&amp;width=40"
                      alt="User Image"
                    ></span>
                    <div className="text-sm">
                      <h3 className="font-semibold text-gray-900 dark:text-gray-200">
                        John Doe
                      </h3>
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary hover:bg-primary/80 text-green-500"
                        prompt="Online"
                      ></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex flex-grow flex-col">
          <div className="flex-grow overflow-auto p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-end">
                <span
                  className="relative flex shrink-0 overflow-hidden w-10 h-10 rounded-full"
                  src="/placeholder.svg?height=40&amp;width=40"
                  alt="User Image"
                ></span>
                <div className="ml-4 bg-gray-200 dark:bg-gray-700 rounded-lg px-4 py-2">
                  <p className="text-sm text-gray-900 dark:text-gray-200">
                    Hello there!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 py-2 px-4 bg-white dark:bg-gray-800">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                placeholder="Type your message here..."
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Send
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;
