import {
  Logoutbutton,
  Signinbutton,
  Signupbutton,
  Dashboardbutton,
  Updatebutton,
} from "../components/Navigationbutton";

import { useNavigate, useLocation } from "react-router-dom";
import { Toast } from "../components/Toast";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export default function Aftermoney() {
  const tocken = localStorage.getItem("token");
  const [balanceafter, setBalance] = useState(0);
  const [name, setName] = useState("Not Authrised");
  const [userName, setuserName] = useState("Not Authrised");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/getBallance", {
        headers: {
          authorization: `Bearer ${tocken}`,
        },
      })
      .then((res) => {
        const notify = () => toast("transaction suceesfull");
        notify();
        const balance = res.data.Balance;
        const firstname = res.data.firstname;
        const username = res.data.username;
        setBalance(balance);
        setName(firstname);
        setuserName(username);
      })
      .catch((err) => {
        const notify = () => toast("Not Authrised to be on this page");
        notify();
      });
  }, []);
  const location = useLocation();
  const { amountsend, firstname, lastname, usernameSendTo, balance } =
    location.state || {
      amountsend: "Not Authrised",
      firstname: "Not Authrised",
      lastname: "Not Authrised",
      usernameSendTo: "Not Authrised",
      balance: "Not Authrised",
    };

  return (
    <div className="flex flex-col items-center h-screen w-screen relative bg-slate-700 ">
      <Toast />
      <nav className="flex items-center justify-center md:justify-between bg-slate-700 w-full h-14 shadow-md shadow-slate-950 bg-slate-700 ">
        <Profile nameuser={name} />
        <div className="mr-0 md:mr-10 flex gap-3 sm:gap-3">
          <Logoutbutton />
          <Signupbutton />
          <Signinbutton />
          <Dashboardbutton />
          <span className="flex md:hidden">
            <Updatebutton />
          </span>
        </div>
      </nav>
      <div className="flex flex-col items-center w-full gap-3 relative top-10 vsm:top-20 text-[0.8rem] sm:text-sm">
        <div className="w-11/12 sm:w-3/4 xl:w-1/2  border rounded-lg p-3 flex flex-col gap-3 ">
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Your Previous Balance :</span>
            <span className="mr-40">{balance}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Your Updated Balance :</span>
            <span className="mr-40">{balanceafter}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Your Username :</span>
            <span className="mr-40">{userName}</span>
          </span>
        </div>
        <div className="w-11/12 sm:w-3/4 xl:w-1/2 flex flex-col gap-3 border p-3 rounded-lg">
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Amount Send:</span>{" "}
            <span className="mr-40">{amountsend}</span>
          </span>
          <span className=" text-center text-xl  ">Reciver info</span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Username :</span>
            <span className="mr-40">{usernameSendTo}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>First Name :</span>
            <span className="mr-40">{firstname}</span>
          </span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Last Name :</span>
            <span className="mr-40">{lastname}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
function Profile({ nameuser }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/update");
      }}
      className="hidden md:flex   items-center ml-20  "
    >
      <span className="relative right-6">Hello,{nameuser}</span>
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
  );
}
