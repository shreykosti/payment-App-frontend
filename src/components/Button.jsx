// export function Button({ input, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       className="z-30 py-2 mt-10 bg-gray-800 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl h-full w-full"
//     >
//       {input}
//     </button>
//   );
// }
import React, { useState } from "react";
export function Button({ input, onClick, data }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full justify-center mt-10 text-xl flex gap-3 cursor-pointer text-white bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-lg border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 font-medium relative z-[1] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-[-3px] data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-[-3px] data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
      data-tooltip={data}
    >
      {input}
    </button>
  );
}

export function Dropdownbutton1({
  button1,
  button2,
  button3,
  button4,
  button5,
  button6,
  name,
}) {
  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="w-full flex flex-col">
        <button
          id="dropdown-hover-event"
          type="button"
          onClick={toggleDropdown}
          className="bg-slate-950 text-white rounded-lg p-2 fixed top-1 right-5 z-50 transition-transform duration-200 hover:scale-105 hover:shadow-md hover:bg-slate-900 hover:text-gray-500 hover:border-gray-800"
        >
          <svg
            className={`size-6 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {isOpen && (
          <div
            className=" w-min transition-[opacity,margin] duration opacity-100 shadow-md  text-white border bg-slate-800  rounded-lg fixed flex top-14 right-4 flex-col "
            aria-labelledby="dropdown-hover-event"
          >
            <span className="w-64"></span>
            <span className=" py-3 text-left text-sm px-3">{name}</span>
            {button4}
            {button6}
            {button2}
            {button3}
            {button1}
            {button5}
          </div>
        )}
      </div>
    );
  };

  return <Dropdown />;
}
