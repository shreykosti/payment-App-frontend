import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import axios from "axios";
export default function Sendmoney() {
  const tocken = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  const [amount, setAmount] = useState(0);
  const [vissible, setVissible] = useState("hidden");
  const { firstname, id, lastname, usernameSendTo, balance, you, youname } =
    location.state || {
      firstname: "NOT AUTHRISED",
      id: "0",
      lastname: "User",
      usernameSendTo: "NOT AUTHRISED",
      you: "NOT AUTHRISED",
      youname: "NOT AUTHRISED",
    };

  return (
    <div className="w-screen h-screen flex justify-center items-center box-si box-border bg-slate-700">
      <Navbar usern={you} display={vissible} name={youname} />
      <div className=" bg-c2 w-max p flex flex-col justify-center items-center p-4 rounded-lg border border-slate-500">
        <Heading input="Send Money" />
        <div className=" w-full h-20 py-14 flex  items-center gap-10  rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6  w-16 h-16 relative left-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="text-black text-2xl ml-[-20px]">{usernameSendTo}</p>
        </div>
        <div className="w-full">
          <input
            type="number"
            placeholder="Enter amount to send"
            aria-label="Amount (in Rs)"
            min="0"
            max="100000"
            step="100"
            className="p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-blue-50 w-full"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <Button
          data={`Sending : ${amount}`}
          input="Initiate Transfer"
          onClick={() => {
            console.log(amount, usernameSendTo, id);
            if (amount <= 0) {
              alert("Please enter a valid amount");
              setVissible("flex");
              return;
            }
            navigate("/pinpage", {
              state: {
                tosendname: usernameSendTo,
                to: id,
                amount: amount,
                firstname: firstname,
                lastname: lastname,
                balance: balance,
              },
            });
          }}
        />
      </div>
    </div>
  );
}
