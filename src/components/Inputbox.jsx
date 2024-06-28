export function Inputbox({ labelname, placeholdername, onChange, type }) {
  return (
    <div className="flex flex-col pt-3 pb-2 w-full">
      <label className=" text-white font-normal mb-2" htmlFor={labelname}>
        {labelname}
      </label>
      <input
        className="p-2 rounded-md bg-slate-700 border border-white text-white focus:outline-none focus:border-blue-500"
        type={type ?? "text"}
        id={labelname}
        placeholder={placeholdername}
        onChange={onChange}
      />
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
