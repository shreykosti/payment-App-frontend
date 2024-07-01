import React, { useState } from "react";
export function Inputbox({
  labelname,
  vissibl,
  onChange,
  icon,
  icon2,
  message,
}) {
  const [vissible, setVissible] = useState(vissibl);
  return (
    <div
      className="flex flex-col pt-3 pb-2 w-full justify-center cursor-pointer rounded-md text-neutral-500  font-medium relative z-[1] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-[-3px] data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-white data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:mt-[-3px] data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-zinc-800 data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-white data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
      data-tooltip={message}
    >
      <label className=" text-white font-normal mb-2" htmlFor={labelname}>
        {labelname}
      </label>
      <div className="flex justify-between items-center w-full rounded-md border text-white">
        <label className="relative left-4" htmlFor={labelname}>
          {icon}
        </label>
        <input
          className="ml-6 bg-transparent h-10 w-full border-none text-white focus:outline-none"
          type={vissible ? "text" : "password"}
          id={labelname}
          onChange={onChange}
        />
        <button
          className="mr-5"
          onClick={() => {
            setVissible(!vissible);
          }}
        >
          {icon2}
        </button>
      </div>

      {/* size-8 mt-[-37px] ml-5 */}
    </div>
  );
}

export function PinInputbox({ onChange, type }) {
  return (
    <div className="flex flex-col pt-3 pb-2 w-full">
      <label className=" text-white font-normal mb-2" htmlFor="pin">
        4 digit pin
      </label>
      <input
        className="p-2 rounded-md bg-slate-700 border border-white text-white focus:outline-none focus:border-blue-500"
        type={type}
        id="pin"
        placeholder="1111"
        onChange={onChange}
        maxLength="4"
        minLength="4"
      />
    </div>
  );
}
