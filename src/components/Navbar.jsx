import { useNavigate } from "react-router-dom";
import {
  Logoutbutton,
  Signinbutton,
  Signupbutton,
  Updatebutton,
} from "./Navigationbutton";
export function Navbar({ firstname }) {
  const navigate = useNavigate();
  return (
    <div className="h-12 flex items-center gap-1 justify-around sm:justify-between bg-slate-700 shadow-md shadow-slate-950">
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
          <Updatebutton />
        </span>
      </div>

      <button
        onClick={() => {
          navigate("/update");
        }}
        className="hidden sm:flex items-center relative right-5 "
      >
        <span className="relative right-6">Hello,{firstname}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6  w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
