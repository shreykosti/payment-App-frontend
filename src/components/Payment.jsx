export function Payment({ usernameSendTo, lastname, firstname, onClick }) {
  return (
    <div>
      <div className="flex items-center justify-between text-white py-2">
        <span>UserName: {usernameSendTo}</span>

        <button
          onClick={onClick}
          className=" bg-neutral-950 p-3 py-2 rounded-xl hover:bg-neutral-400 hover:text-blue-950 flex  items-center justify-center gap-2"
        >
          <span className="hidden sm:block">send money</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
