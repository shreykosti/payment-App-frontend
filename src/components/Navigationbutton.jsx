import { useNavigate } from "react-router-dom";

export function Logoutbutton({ data }) {
  const navigate = useNavigate();
  return (
    <button
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-noneo"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/");
      }}
    >
      Logout
    </button>
  );
}

export function Signinbutton({ data }) {
  const navigate = useNavigate();
  return (
    <button
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
      onClick={() => {
        navigate("/signin");
      }}
    >
      Signin
    </button>
  );
}

export function Signupbutton({ data }) {
  const navigate = useNavigate();
  return (
    <button
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
      onClick={() => {
        navigate("/signup");
      }}
    >
      Signup
    </button>
  );
}

export function Dashboardbutton({ data }) {
  const navigate = useNavigate();
  return (
    <button
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      Dashboard
    </button>
  );
}

export function TransationHistory({ data }) {
  const navigate = useNavigate();
  return (
    <button
      className="relative isolation-auto z-10  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full  before:-right-full before:hover:right-0 before:rounded-full before:bg-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white  border border-gray-200 rounded-lg shadow-sm gap-x-2  disabled:opacity-50 disabled:pointer-events-none"
      onClick={() => {
        navigate("/transactionhistory");
      }}
    >
      History
    </button>
  );
}
