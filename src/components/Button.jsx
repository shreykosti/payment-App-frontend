export function Button({ input, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white w-full mt-8 bg-gray-800 p-3 rounded-lg hover:bg-black"
    >
      {input}
    </button>
  );
}
