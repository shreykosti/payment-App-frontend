import { useNavigate } from "react-router-dom";
import { Logoutbutton, Signinbutton, Signupbutton } from "./Navigationbutton";
import { Profileupdater } from "./Profileupdater";
import Modal from "./Modal";
export function Navbar({ name }) {
  const navigate = useNavigate();
  return (
    <div className="h-12 w-full flex items-center gap-1 justify-around sm:justify-between bg-slate-700 shadow-md shadow-slate-950">
      <button
        className="text-xl font-bold relative left-5 hidden sm:flex"
        onClick={() => {
          navigate("/");
        }}
      >
        Payments App
      </button>
      <div className="flex gap-4 sm:gap-5 md:gap-12 lg:gap-28   relative right-0 sm:right-3">
        <Logoutbutton />
        <Signinbutton />
        <Signupbutton />

        <span className="flex sm:hidden">
          <Modal />
        </span>
      </div>

      <Profileupdater name={name} outerdiv="relative right-10" />
    </div>
  );
}
