import { useNavigate } from "react-router-dom";

export function Logoutbutton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}
    >
      Logout
    </button>
  );
}

export function Signinbutton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/signin");
      }}
    >
      Signin
    </button>
  );
}

export function Signupbutton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/signup");
      }}
    >
      Signup
    </button>
  );
}

export function Dashboardbutton() {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-2 px-2 sm:px-6 font-sans text-[0.7rem] sm:text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border"
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      Dashboard
    </button>
  );
}

export function Updatebutton() {
  const navigate = useNavigate();
  return (
    <button
      className="h-full flex items-center gap-2 px-2 sm:px-6 font-sans text-[0.7rem] sm:text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900 active:bg-gray-900/20 border"
      onClick={() => {
        navigate("/update");
      }}
    >
      Update
    </button>
  );
}
