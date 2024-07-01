import {Navbar} from "../components/Navbar";
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
  const [userlastname, setLastName] = useState("Not Authrised");
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
        setLastName(res.data.lastname);
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
  console.log(location.state);
  const { amount, tosendname, firstname, lastname, balance } =
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
      <Navbar name={name} />
      <div className="flex flex-col items-center w-full gap-3 relative top-32 vsm:top-20 text-[0.8rem] sm:text-sm">
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
            <span>Amount Send:</span> <span className="mr-40">{amount}</span>
          </span>
          <span className=" text-center text-xl  ">Reciver info</span>
          <span className="p-2 sm:p-3 border border-slate-500 hover:bg-slate-950 flex justify-between">
            <span>Username :</span>
            <span className="mr-40">{tosendname}</span>
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
