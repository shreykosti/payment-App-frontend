export function Inputbox({ labelname, placeholdername, onChange }) {
  return (
    <div className="flex flex-col pt-3 pb-2 w-full">
      <label className=" text-white font-normal mb-2" htmlFor={labelname}>
        {labelname}
      </label>
      <input
        className="p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-blue-500"
        type="text"
        id={labelname}
        placeholder={placeholdername}
        onChange={onChange}
      />
    </div>
  );
}
