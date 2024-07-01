import "./loader.css";
export function Loader1() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-950 ">
      <div className="card -mt-20 p-4">
        <div className="loader">
          <p className="text-white">Loading</p>
          <div className="words text-4xl">
            <span className="word">Payment</span>
            <span className="word">forms</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">buttons</span>
          </div>
        </div>
      </div>
    </div>
  );
}
